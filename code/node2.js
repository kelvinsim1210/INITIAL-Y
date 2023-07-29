// 寫入文件

// 導入 fs模塊
const fs = require("fs");

// 寫入文件
// 如果目標文件不存在，會自動生成
fs.writeFile("./node_01.txt", "測試寫入1", err => {
    if(err) {
        console.log("寫入失敗");
        return;
    }
    console.log("寫入成功");
});

// 寫入文件通常是異步
console.log(1);  // 先執行了這個才顯示“寫入成功”（因為異步寫入，所以以上的結果在執行結束後才被擠回進程）

// 同步
fs.writeFileSync("./node_02.txt", "測試寫入2");
console.log(2);

// --------------------------------------------------
// 追加寫入
// 異步
fs.appendFile("./node_01.txt", "\n追加寫入1", err => {
    if(err) {
        console.log("追加寫入失敗");
        return;
    }
    console.log("追加寫入成功");
});

// writeFile添加方法{flag: "a"}也可以實現最佳寫入的功能
fs.writeFile("../text/node_01.txt", "\n追加寫入1", {flag: "a"},err => {
    if(err) {
        console.log("追加寫入失敗");
        return;
    }
    console.log("追加寫入成功");
});

// 同步
fs.appendFileSync("../text/node_02.txt", "\n追加寫入2");

// --------------------------------------------------
// 文件流寫入（高頻寫入）
let ws = fs.createWriteStream("../text/node_03.txt");
ws.write("文件流寫入1");
ws.write("文件流寫入2");
ws.write("文件流寫入3");
ws.close();