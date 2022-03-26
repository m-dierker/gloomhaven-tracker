const { initializeApp, cert } = require("firebase-admin/app");
const { getFirestore } = require("firebase-admin/firestore");
const { getStorage } = require("firebase-admin/storage");
const fs = require("fs/promises");

const accountKey = require("../keys/glo2mhaven-tracker-firebase-adminsdk.json");
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
  const monsterDocs = await db.collection("monsters").get();

  dataBundle.add("boss-docs", bossDocs);
  dataBundle.add("monster-docs", monsterDocs);
  const bundleBuffer = dataBundle.build();

  const bucket = getStorage().bucket();
  await bucket.file(GAME_BUNDLE_NAME).save(bundleBuffer);
  await bucket.file(GAME_BUNDLE_NAME).setMetadata({
    cacheControl: "private, max-age=3600",
  });

  console.log("Bundle saved in Cloud Storage");
}
saveBundles();
