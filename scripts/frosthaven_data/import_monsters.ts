import { initializeApp, cert } from "firebase-admin/app";
import { Firestore, getFirestore } from "firebase-admin/firestore";
import * as fs from "fs/promises";
import { Boss } from "src/app/db/boss";
// Importing actual types is broken.
import { BossData, MonsterData } from "src/types/monster-data";

const MONSTER_DATA_DIR = "./scripts/frosthaven_data/gh-secretariat/monster";

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
  importMonsters(db);
}

async function importMonsters(db: Firestore) {
  // Read every file in ./scripts/frosthaven_data/gh-secretariat/monster.
  const monsterFiles = await fs.readdir(MONSTER_DATA_DIR);
  const batch = db.batch();
  for (const filePath of monsterFiles) {
    const fileData = JSON.parse(
      (await fs.readFile(`${MONSTER_DATA_DIR}/${filePath}`)).toString()
    );
    if (fileData.boss) {
      console.log("Processing ", filePath);
      const boss = getBoss(fileData);
      batch.set(db.collection("bosses").doc(boss.id), boss);
      console.log("Processed boss ", boss.displayName);
    } else {
      // FIXME REMOVE THIS
      continue;
      const monster = getMonster(fileData);
      batch.set(db.collection("monsters").doc(monster.id), monster);
      console.log("Processed ", monster.displayName);
    }
  }
  console.log("Committing batch...");
  await batch.commit();
}

function getMonster(data: any): MonsterData {
  const name: string = data.name;
  const id = `fh_${name.toLowerCase().replaceAll("-", "_")}`;
  const displayName = name
    .split("-")
    .map((s) => s[0].toUpperCase() + s.slice(1))
    .join(" ");

  const out: Partial<MonsterData> = {
    id,
    displayName,
    // @ts-ignore: Can't import GameBox here.
    gamebox: "fh", // GameBox.FROSTHAVEN
    maxTokens: data.count || 1,
  };
  const levelStats = {};
  for (const level of data.stats) {
    if (!levelStats[level.level]) {
      levelStats[level.level] = {};
    }
    const statsKey = level.type === "elite" ? "elite" : "normal";
    if (!level.health) {
      console.error("Monster with no health: ", name, level);
    }
    levelStats[level.level][statsKey] = {
      health: level.health,
      move: level.movement || 0,
      attack: level.attack || 0,
      // No range attribute in this data file.
    };
  }
  out.levelStats = levelStats;
  return out as MonsterData;
}

function getBoss(data: any): BossData {
  const name: string = data.name;
  const id = `fh_${name.toLowerCase().replaceAll("-", "_")}`;
  const displayName = name
    .split("-")
    .map((s) => s[0].toUpperCase() + s.slice(1))
    .join(" ");

  const out: Partial<BossData> = {
    id,
    displayName,
    // @ts-ignore: Can't import GameBox here.
    gamebox: "fh", // GameBox.FROSTHAVEN,
  };
  const allLevelStats = {};
  for (const level of data.stats) {
    const levelStats: any = {
      move: level.movement || 0,
      attack:
        level.attack && typeof level.attack === "number" ? level.attack : 0,
    };
    const healthVal: number | string = level.health;
    if (typeof healthVal === "number") {
      levelStats.health = healthVal;
    } else if (healthVal?.match(HEALTH_FIRST_REGEX)) {
      // Only simple boss formulas are supported for now.
      // TODO: Update this once client code can handle more complex bosses.
      levelStats.healthStr = healthVal;
    } else if (healthVal?.match(HEALTH_LAST_REGEX)) {
      // This one is a simple transformation to move to the older format.
      const match = healthVal.match(HEALTH_LAST_REGEX);
      levelStats.healthStr = `${match[1]}xC`;
    } else {
      console.log(
        "Unable to handle health val: ",
        healthVal,
        ", defaulting to 1"
      );
      levelStats.health = 1;
    }
    allLevelStats[level.level] = levelStats;
  }
  // @ts-ignore: levelStats typing is weird.
  out.levelStats = allLevelStats;
  return out as BossData;
}

const HEALTH_FIRST_REGEX = /^\d+xC$/;
const HEALTH_LAST_REGEX = /^Cx(\d+)$/;
