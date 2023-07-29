// path 套件

const fs = require("fs");
const path = require("path");

// 合成絕對路徑
// （絕對路徑，相對路徑）
console.log(path.resolve(__dirname, "node7.js"));

// 獲取當前系統使用的路徑分隔符
console.log(path.sep);

let Target = "D:\\My_Document\\程式設計\\node_js\\code\\node7.js";
// 解析路徑內容
console.log(path.parse(Target));

// 獲取文件名稱
console.log(path.basename(Target));

// 獲取文件夾名稱
console.log(path.dirname(Target));

// 獲取文件擴展名
console.log(path.extname(Target));