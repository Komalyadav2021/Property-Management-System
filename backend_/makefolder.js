const fs = require("fs");

function createfolder(name) {
  try {
    if (!fs.existsSync("public/Images/" + name)) {
      fs.mkdirSync("public/Images/" + name);
    }
  } catch (err) {
    console.error(err);
  }
}
module.exports = createfolder;
