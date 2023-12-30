import { initializeApp, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import { getStorage } from "firebase-admin/storage";
import * as fs from "fs";

const accountKey = JSON.parse(
  fs.readFileSync("./keys/glo2mhaven-tracker-firebase-adminsdk.json").toString()
);
// TODO: See about merging with real source.
const GAME_BUNDLE_NAME = "gamedata.bundle";

initializeApp({
  credential: cert(accountKey),
  projectId: "glo2mhaven-tracker",
  storageBucket: "glo2mhaven-tracker.appspot.com",
});

const db = getFirestore();

async function saveBundles() {
  const dataBundle = await db.bundle("gameData");

  const bossDocs = await db.collection("bosses").get();
  const characterDocs = await db.collection("characters").get();
  const monsterDocs = await db.collection("monsters").get();
  const scenarioDocs = await db.collection("scenarios").get();
  const summonDocs = await db.collection("summons").get();

  dataBundle.add("boss-docs", bossDocs);
  dataBundle.add("character-docs", characterDocs);
  dataBundle.add("monster-docs", monsterDocs);
  dataBundle.add("scenario-docs", scenarioDocs);
  dataBundle.add("summon-docs", summonDocs);
  const bundleBuffer = dataBundle.build();

  const bucket = getStorage().bucket();
  await bucket.file(GAME_BUNDLE_NAME).save(bundleBuffer);
  await bucket.file(GAME_BUNDLE_NAME).setMetadata({
    cacheControl: "private, max-age=3600",
  });

  console.log("Saved in Cloud Storage, rewriting local bundle...");
  fs.writeFileSync("./src/assets/data/gamedata.local.bundle", bundleBuffer);

  console.log("Bundle updated!");
}
saveBundles();
