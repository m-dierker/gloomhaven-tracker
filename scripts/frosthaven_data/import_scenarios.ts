import { initializeApp, cert } from "firebase-admin/app";
import { Firestore, getFirestore } from "firebase-admin/firestore";
import * as fs from "fs/promises";
import { Boss } from "src/app/db/boss";
import { ScenarioInfo } from "src/app/db/scenario-info";
// Importing actual classes is broken but types are ok.

// TODO POTENTIALLY IN THE FUTURE:
// re-import from gh-secretariat 🤦‍♂️ then augment with fhtts for map tiles

/**
 * Importing scenarios is multistep:
 * 1) Read in scenarios from gh-secretariant scenarios folder.
 * 2) Build monsterIds and bossIds from what's listed there.
 * 3) Augment map tiles from fhtts or something?
 */

// Start by importing monsters.
main();

async function main() {
  const accountKey = JSON.parse(
    (
      await fs.readFile("./keys/glo2mhaven-tracker-firebase-adminsdk.json")
    ).toString()
  );

  initializeApp({
    credential: cert(accountKey),
    projectId: "glo2mhaven-tracker",
    storageBucket: "glo2mhaven-tracker.appspot.com",
  });

  const db = getFirestore();
  importScenarios(db);
}

async function importScenarios(db: Firestore) {
  const allMonsterIds: Set<string> = new Set(
    (await db.collection("monsters").get()).docs.map((doc) => doc.id)
  );
  const allBossIds: Set<string> = new Set(
    (await db.collection("bosses").get()).docs.map((doc) => doc.id)
  );

  const fileData = (
    await fs.readFile("./scripts/frosthaven_data/fhtts_scenarios.json")
  ).toString();
  const scenarios = JSON.parse(fileData);
  const batch = db.batch();
  for (const [scenarioId, scenarioData] of Object.entries(scenarios) as any) {
    const id = `fh_${scenarioId}`;
    console.log(`Processing ${id}...`);
    const scenario = getScenario(
      scenarioId,
      scenarioData,
      allMonsterIds,
      allBossIds
    );
    if (scenario === undefined) {
      console.log("Skipping scenario: ", id);
      continue;
    }
    batch.set(db.collection("scenarios").doc(id), scenario);
  }
  console.log("Committing batch...");
  await batch.commit();
}

function getScenario(
  scenarioId: string,
  scenarioData: any,
  allMonsterIds: Set<string>,
  allBossIds: Set<string>
): ScenarioInfo | undefined {
  // Some scenarios are choices without monsters.
  if (!scenarioData.monsters) {
    return undefined;
  }

  const out: Partial<ScenarioInfo> = {
    scenarioNum: scenarioId.toUpperCase(),
    scenarioTitle: scenarioData.title,
    difficulty: scenarioData.difficulty || 0,
    allMapTiles: scenarioData.tiles,
    sections: scenarioData.sections,
  };

  for (const enemy of scenarioData.monsters) {
    // TODO: This should handle scenario-specific monsters somehow.
    const enemyId = `fh_${enemy.name.split(" ").join("_").toLowerCase()}`;
    let checkMonsters = false;
    // This is really messy but I'm tired. -_- Some bosses are broken.
    if (enemy.boss) {
      if (!allBossIds.has(enemyId)) {
        console.log(`Missing boss ${enemyId} in scenario ${scenarioId}`);
        checkMonsters = true;
      } else {
        if (!out.bossIds) {
          out.bossIds = [];
        }
        out.bossIds.push(enemyId);
      }
    }

    if (!enemy.boss || checkMonsters) {
      if (!allMonsterIds.has(enemyId)) {
        console.log(`Missing monster ${enemyId} in scenario ${scenarioId}`);
        return undefined;
      }
      if (!out.monsterIds) {
        out.monsterIds = [];
      }
      out.monsterIds.push(enemyId);
    }
  }
  return out as ScenarioInfo;
}
