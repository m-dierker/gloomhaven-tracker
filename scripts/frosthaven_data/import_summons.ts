import { initializeApp, cert } from "firebase-admin/app";
import { Firestore, getFirestore } from "firebase-admin/firestore";
import * as fs from "fs/promises";
import { Boss } from "src/app/db/boss";
import { ScenarioInfo } from "src/app/db/scenario-info";
// Importing actual classes is broken but types are ok.
import { CharacterData, SummonData } from "src/types/monster-data";

main();

const CHARACTER_DIRECTORY =
  "./scripts/frosthaven_data/gh-secretariat/character";

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
  importCharacters(db);
}

async function importCharacters(db: Firestore) {
  const characterFiles = await fs.readdir(CHARACTER_DIRECTORY);
  const batch = db.batch();
  for (const filePath of characterFiles) {
    const fileData = JSON.parse(
      (await fs.readFile(`${CHARACTER_DIRECTORY}/${filePath}`)).toString()
    );
    const characterName = fileData.name.replaceAll("-", "_").toLowerCase();
    const existingSummonIds: Set<string> = new Set();
    for (const summonData of fileData.availableSummons || []) {
      const summon = getSummon(summonData, characterName);
      const id = summon.id;
      // Boooooo special case I hate it, but I'm sleepy and don't want to do this properly.
      if (
        id === "fh_boneshaper_shambling_skeleton" &&
        summon.unlockedLevel !== 1
      ) {
        continue;
      }
      if (existingSummonIds.has(id)) {
        // Some summons (FH Banner Spear) duplicate entries for multiple cards.
        // Just not handling this for now.
        continue;
      }
      delete summon.id;
      batch.set(db.collection("summons").doc(id), summon);
    }
  }
  await batch.commit();
  console.log("Summons imported");
}

function getSummon(summonData: any, characterId: string): SummonData {
  const summon: Partial<SummonData> = {
    id: `fh_${characterId}_${summonData.name
      .replaceAll("-", "_")
      .toLowerCase()}`,
    displayName: (summonData.name as string)
      .replaceAll("-", " ")
      .split(" ")
      .map((word: string) => word[0].toUpperCase() + word.slice(1))
      .join(" "),
    characterId: `fh_${characterId}`,
    unlockedLevel: summonData.level || 1,
    gamebox: "fh" as any, // GameBox.FROSTHAVEN
    stats: {
      health: summonData.health || 1,
      attack: summonData.attack || 0,
      move: summonData.movement || 0,
    },
  };
  return summon as SummonData;
}
