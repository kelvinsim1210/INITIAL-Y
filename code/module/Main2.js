// 導入文件夾
// 如果導入的路徑是文件夾，會檢測目標文件夾下package.json里的main屬性是否存在
// 如果不存在main屬性或package.json文件，就會去導入index.js或index.json

const module1 = require("./dir1");

console.log(module1.text2);