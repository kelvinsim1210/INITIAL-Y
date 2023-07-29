// 條件渲染
// else必須鏈接if的結束符，不然會報錯

const ejs = require("ejs");
const fs = require("fs");

let IsLogin = false;

const Page1 = fs.readFileSync("./Page1.html").toString();
const result = ejs.render(Page1, {IsLogin});

console.log(result);