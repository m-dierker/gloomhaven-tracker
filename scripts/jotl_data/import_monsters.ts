import { MonsterData } from "../../src/types/monsters";

import { promises as fs } from "fs";
import { Firestore } from "@google-cloud/firestore";

const firestore = new Firestore({
  keyFilename: "keys/glo2mhaven-tracker-firebase-adminsdk.json",
});

const DATA_DIR = "./scripts/jotl_data/monster";

async function importMonsters() {
  const files = await fs.readdir(DATA_DIR);
  for (const file of files) {
    const monsterData = JSON.parse(
      (await fs.readFile(`${DATA_DIR}/${file}`)).toString()
    );

    const out: Partial<MonsterData> = {
      // @ts-ignore
      gamebox: "jotl" as unknown,
    };

    out.id = `jotl_${monsterData.name.replaceAll("-", "_")}`;
    out.displayName = camelCase(monsterData.name) + " (JotL)";
    out.levelStats = {};

    for (let levelStat of monsterData.stats) {
      const level = levelStat["level"];
      if (!out.levelStats.hasOwnProperty(level)) {
        // @ts-ignore
        out.levelStats[level] = {};
      }
      const typeCode = levelStat.type === "elite" ? "elite" : "normal";
      // @ts-ignore
      out.levelStats[level][typeCode] = {
        attack: levelStat.attack,
        health: levelStat.health,
        // @ts-ignore
        attributes: {},
      };
    }

    console.log(JSON.stringify(out, null, 2) + "\n\n\n");

    firestore.collection("monsters").doc(out.id).set(out);
  }

  // const monstersData = JSON.parse(fs.readFileSync('scripts/monster_stats.json'));
  // const batch = firestore.batch();
  // for (const [monsterName, monsterData] of Object.entries(monstersData['monsters'])) {
  //     const monsterId = monsterName.toLowerCase().replace(' ', '_');
  //     const levelObj = {};
  //     monsterData['level'].forEach(levelData => {
  //         levelObj[levelData['level']] = {
  //             normal: levelData['normal'],
  //             elite: levelData['elite'],
  //         };
  //     });
  //     const stats = {
  //         id: monsterId,
  //         displayName: monsterName,
  //         levelStats: levelObj
  //     };
  //     batch.create(firestore.collection('monsters').doc(monsterId), stats);
  // }
  // for (const [bossName, bossData] of Object.entries(monstersData['bosses'])) {
  // const bossId = bossName.toLowerCase().replace(/ /g, '_');
  //     const levelObj = {};
  //     bossData['level'].forEach(levelData => {
  //         levelObj[levelData['level']] = levelData;
  //     });
  //     const stats = {
  //         id: bossId,
  //         displayName: bossName,
  //         levelStats: levelObj
  //     };
  //     batch.create(firestore.collection('bosses').doc(bossId), stats);
  // }
  // await batch.commit();
  // console.log('Monsters and bosses imported');
}

importMonsters();

function camelCase(dashedName: string) {
  return dashedName
    .split("-")
    .map((lower) => lower.slice(0, 1).toUpperCase() + lower.slice(1))
    .join(" ");
}
