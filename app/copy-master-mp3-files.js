// used to find mp3 files on hard drive and copy them to a destination directory

const fs = require("fs");
const path = require("path");

// Define source and destination directories
const sourceDir = "K:\\_JBCOM PUBLISHED\\00 SINGLE TRACKS";
const destinationDir = "K:\\MASTER-MP3";

// Ensure the destination directory exists
if (!fs.existsSync(destinationDir)) {
  fs.mkdirSync(destinationDir, { recursive: true });
}

// Function to recursively find and copy files
const copyMasterFiles = (dir) => {
  fs.readdir(dir, { withFileTypes: true }, (err, entries) => {
    if (err) {
      console.error(`Error reading directory ${dir}:`, err);
      return;
    }

    entries.forEach((entry) => {
      const fullPath = path.join(dir, entry.name);

      if (entry.isDirectory()) {
        // Recursively search subdirectories
        copyMasterFiles(fullPath);
      } else if (
        entry.isFile() &&
        entry.name.endsWith("-master.mp3" || "-Master.mp3")
      ) {
        // Copy file to the destination directory
        const destinationFile = path.join(destinationDir, entry.name);
        fs.copyFile(fullPath, destinationFile, (err) => {
          if (err) {
            console.error(`Error copying file ${entry.name}:`, err);
          } else {
            console.log(`Copied: ${entry.name}`);
          }
        });
      }
    });
  });
};

// Start the recursive search
copyMasterFiles(sourceDir);
