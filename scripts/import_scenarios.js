const { initializeApp, cert } = require("firebase-admin/app");
const { getFirestore } = require("firebase-admin/firestore");
const fs = require("fs");

const accountKey = require("../keys/glo2mhaven-tracker-firebase-adminsdk.json");

initializeApp({
  credential: cert(accountKey),
  projectId: "glo2mhaven-tracker",
});

const db = getFirestore();

async function importScenarios() {
  const scenarioData = JSON.parse(
    (await fs.promises.readFile("scripts/scenarios.json")).toString()
  );

  const allBossIds = new Set(
    (await db.collection(BOSSES_COLLECTION).get()).docs.map((doc) => doc.id)
  );
  const allMonsterIds = new Set(
    (await db.collection(MONSTERS_COLLECTION).get()).docs.map((doc) => doc.id)
  );

  const batch = db.batch();
  for (const scenario of scenarioData) {
    const scenarioName = scenario.name;
    const scenarioDecks = scenario.decks;

    const scenarioNameMatch = scenarioName.match(/^#(\d+)/);
    // There are some scenarios with funky names that are skipped for now.
    if (!scenarioNameMatch || scenarioNameMatch.length !== 2) {
      console.log("Skipping ", scenarioName);
      continue;
    }
    const scenarioId = `${GLOOMHAVEN_PREFIX}${scenarioNameMatch[1]}`;

    const idsToFind = scenarioDecks.map((deck) => nameToId(deck.name));

    const monsterIds = [];
    const bossIds = [];
    for (const classId of idsToFind) {
      if (allMonsterIds.has(classId)) {
        monsterIds.push(classId);
      } else if (allBossIds.has(classId)) {
        bossIds.push(classId);
      } else {
        console.warn("Missing monster ", classId, " from scenario", scenarioId);
      }
    }

    batch.set(db.collection(SCENARIOS_COLLECTION).doc(scenarioId), {
      monsters: monsterIds,
      bosses: bossIds,
    });
  }
  await batch.commit();

  console.log("Scenario data committed");
}
importScenarios();

/** "Living Dead" --> "living_dead" to match DB format. */
function nameToId(name) {
  return name.toLocaleLowerCase().replaceAll(" ", "_");
}

// TODO: Share with real code.
const GLOOMHAVEN_PREFIX = "gh-";
const BOSSES_COLLECTION = "bosses";
const MONSTERS_COLLECTION = "monsters";
const SCENARIOS_COLLECTION = "scenarios";
