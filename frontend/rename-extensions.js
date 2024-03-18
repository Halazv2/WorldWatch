import fs from 'fs';
import path from 'path';

function renameFileExtensions(dirPath, fromExt, toExt) {
  fs.readdirSync(dirPath).forEach((file) => {
    const filePath = path.join(dirPath, file);
    if (fs.statSync(filePath).isDirectory()) {
      renameFileExtensions(filePath, fromExt, toExt);
    } else if (file.endsWith(fromExt)) {
      const newFilePath = path.join(dirPath, file.replace(new RegExp(fromExt + '$'), toExt));
      fs.renameSync(filePath, newFilePath);
      console.log(`Renamed: ${filePath} -> ${newFilePath}`);
    }
  });
}

const directoryPath = './src'; // Change this to your source directory
// Rename .js files to .ts
renameFileExtensions(directoryPath, '.js', '.ts');
// component files
renameFileExtensions(directoryPath, '.jsx', '.tsx');
