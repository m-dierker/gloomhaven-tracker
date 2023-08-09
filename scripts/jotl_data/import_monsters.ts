import { BossData, MonsterData } from "../../src/types/monster-data";

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

    if (monsterData.boss) {
      const out: Partial<BossData> = {
        id: `jotl_${monsterData.name.replaceAll("-", "_")}`,
        displayName: camelCase(monsterData.name),
        // @ts-ignore
        gamebox: "jotl",
      };
      // @ts-ignore
      out.levelStats = {};

      for (let levelStat of monsterData.stats) {
        out.levelStats[levelStat["level"]] = {
          attack: levelStat["attack"],
          move: levelStat["movement"] || 0,
          health: levelStat["health"],
        };
      }

      firestore.collection("bosses").doc(out.id).set(out);

      continue;
    }

    const out: Partial<MonsterData> = {
      // @ts-ignore
      gamebox: "jotl" as unknown,
    };

    out.id = `jotl_${monsterData.name.replaceAll("-", "_")}`;
    out.displayName = camelCase(monsterData.name);
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
}

importMonsters();

function camelCase(dashedName: string) {
  return dashedName
    .split("-")
    .map((lower) => lower.slice(0, 1).toUpperCase() + lower.slice(1))
    .join(" ");
}
