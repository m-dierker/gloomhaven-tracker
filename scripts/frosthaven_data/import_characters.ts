import { initializeApp, cert } from "firebase-admin/app";
import { Firestore, getFirestore } from "firebase-admin/firestore";
import * as fs from "fs/promises";
import { Boss } from "src/app/db/boss";
import { ScenarioInfo } from "src/app/db/scenario-info";
// Importing actual classes is broken but types are ok.
import { CharacterData } from "src/types/monsters";

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
    const character = getCharacter(fileData);
    const id = character.id;
    delete character.id;
    batch.set(db.collection("characters").doc(id), character);
  }
  await batch.commit();
  console.log("Characters imported");
}

function getCharacter(fileData: any): CharacterData {
  const character: Partial<CharacterData> = {
    id: `fh_${fileData.name.replace("-", "_").toLowerCase()}`,
    displayName: (fileData.name as string)
      .replace("-", " ")
      .split(" ")
      .map((word: string) => word[0].toUpperCase() + word.slice(1))
      .join(" "),
    gamebox: "fh" as any, // GameBox.FROSTHAVEN
    levelStats: {} as any,
  };

  for (const { level, health } of fileData.stats) {
    character.levelStats[level] = {
      health,
    };
  }

  return character as CharacterData;
}
