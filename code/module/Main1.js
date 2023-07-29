// 導入模塊文件（在導入自己建立的模塊時路徑用相對路徑，不能省略./和../）
// js,json可以忽略後綴，存在相同名字的js,json文件會有限讀取js文件（總之別省略後綴就是了）
// 導入別的文件都會以js的格式來解析
const module1 = require("./module1.js");
// 查看導入的模塊
console.log(module1);
// 調用模塊內容
module1.Print1();
module1.Print2();