const { Firestore } = require("@google-cloud/firestore");
const fs = require("fs");

const firestore = new Firestore({
  keyFilename: "keys/glo2mhaven-tracker-firebase-adminsdk.json",
});

async function importMonsters() {
  const allMonsters = firestore.collection("monsters").get();
  const allMonsterIds = (await allMonsters).docs.map((doc) => doc.id);
  await firestore
    .collection("scenarios")
    .doc("gh-0")
    .update("monsterIds", allMonsterIds);
  console.log("Done");
}

importMonsters();
