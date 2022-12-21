import { Firestore } from "@google-cloud/firestore";
import * as fs from "fs";

const firestore = new Firestore({
  keyFilename: "keys/glo2mhaven-tracker-firebase-adminsdk.json",
});

async function importMonsters() {
  const monstersData = JSON.parse(
    fs.readFileSync("./scripts/gloomhaven_data/monster_stats.json")
  );
  const batch = firestore.batch();
  for (const [monsterName, monsterData] of Object.entries(
    monstersData["monsters"]
  )) {
    const monsterId = monsterName.toLowerCase().replace(" ", "_");
    const levelObj = {};
    monsterData["level"].forEach((levelData) => {
      levelObj[levelData["level"]] = {
        normal: levelData["normal"],
        elite: levelData["elite"],
      };
    });
    const docId = `gh_${monsterId}`;
    const stats = {
      id: docId,
      displayName: monsterName,
      levelStats: levelObj,
      gamebox: "gh",
    };
    batch.set(firestore.collection("monsters").doc(docId), stats);
  }
  for (const [bossName, bossData] of Object.entries(monstersData["bosses"])) {
    const bossId = bossName.toLowerCase().replace(/ /g, "_");
    const levelObj = {};
    bossData["level"].forEach((levelData) => {
      levelObj[levelData["level"]] = levelData;
    });
    const docId = `gh_${bossId}`;
    const stats = {
      id: docId,
      displayName: bossName,
      levelStats: levelObj,
      gamebox: "gh",
    };
    batch.set(firestore.collection("bosses").doc(docId), stats);
  }
  await batch.commit();
  console.log("Monsters and bosses imported");
}

importMonsters();
