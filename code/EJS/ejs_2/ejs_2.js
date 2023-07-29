// 列表渲染
// <% %>是列表渲染的格式

const ejs = require("ejs");
const fs = require("fs");

const Name = ["Kelvin", "Sim", "Kar", "Loong"];

const Page1 = fs.readFileSync("./Page1.html").toString();
const result = ejs.render(Page1, {Name});

console.log(result);