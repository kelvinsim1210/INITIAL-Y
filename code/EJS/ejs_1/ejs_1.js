const ejs = require("ejs");
const fs = require("fs");

const Name = "kelvin";
const Name2 = "Christy";

// 以string記錄
const str = fs.readFileSync("./Page1.html").toString();

// 第一個數據為字符串，第二個數據是導入會用到的替換數據
// ejs.render會將字符串里<%= %>標識的變量用傳入的數據替換掉
const result = ejs.render(str, {Name, Name2});

console.log(result);