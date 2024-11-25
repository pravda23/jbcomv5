const fs = require("fs");
const path = require("path");

const folderPath = "C:/Users/Guest Account/Desktop/800"; // Replace this with the path to your folder

fs.readdir(folderPath, (err, files) => {
  if (err) {
    console.error("Error reading folder:", err);
    return;
  }

  const filenamesArray = files.map((file) => `'${file}'`);
  const copyableArray = `[${filenamesArray.join(", ")}]`;

  console.log("Copyable array of filenames:");
  console.log(copyableArray);
});
