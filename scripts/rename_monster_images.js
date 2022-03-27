const fs = require("fs/promises");

/** Renames monster images from Horz-Bandit Guard.png to Horz-bandit_guard.png. */

const ASSET_PATH = "src/assets/monsters";

const NAME_REGEX = /^(Horz|Vert)-([A-Za-z\s]+).png$/;

async function renameImages() {
  const files = await fs.readdir(ASSET_PATH);
  for (const file of files) {
    const match = file.match(NAME_REGEX);
    if (!match || match.length !== 3) {
      console.log("skipping", file);
      continue;
    }
    const newName = `${match[1]}-${convertToClassId(match[2])}.png`;
    await fs.rename(`${ASSET_PATH}/${file}`, `${ASSET_PATH}/${newName}`);
  }
  console.log("Done");
}
renameImages();

function convertToClassId(name) {
  return name.toLowerCase().replaceAll(" ", "_");
}
