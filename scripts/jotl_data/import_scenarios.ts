import { BossData, MonsterData } from "../../src/types/monsters";

import { promises as fs } from "fs";
import { Firestore } from "@google-cloud/firestore";
import { ScenarioInfo } from "src/app/db/scenario-info";

const firestore = new Firestore({
  keyFilename: "keys/glo2mhaven-tracker-firebase-adminsdk.json",
});

const bossIds = new Set(["blood-horror", "blood-tumor", "first-of-the-order"]);

async function importScenarios() {
  const scenarioData = JSON.parse(
    (await fs.readFile("./scripts/jotl_data/scenarios.json")).toString()
  );

  for (let scenario of scenarioData) {
    const out: Partial<ScenarioInfo> = {
      scenarioNum: scenario["index"],
      scenarioTitle: scenario["name"],
    };

    for (let monsterId of scenario.monsters) {
      const isBoss = bossIds.has(monsterId);
      if (isBoss) {
        if (out.bossIds) {
          out.bossIds.push(convertMonsterId(monsterId));
        } else {
          out.bossIds = [convertMonsterId(monsterId)];
        }
      } else {
        if (out.monsterIds) {
          out.monsterIds.push(convertMonsterId(monsterId));
        } else {
          out.monsterIds = [convertMonsterId(monsterId)];
        }
      }
    }

    await firestore
      .collection("scenarios")
      .doc(`jotl_${out.scenarioNum}`)
      .set(out);
  }
}

function convertMonsterId(monsterId: string): string {
  // @ts-ignore
  return `jotl_${monsterId.replaceAll("-", "_")}`;
}

importScenarios();
