// 讀取文件
const fs = require("fs");

// 異步讀取
// err記錄錯誤，data記錄讀取到的內容
fs.readFile("../text/node_01.txt", (err, data) => {
    if(err) {
        console.log("讀取失敗");
        return;
    }
    console.log(data.toString());
});

// 同步讀取
let data = fs.readFileSync("../text/node_02.txt");
console.log(data.toString());

// --------------------------------------------------
// 文件流式讀取
const rs = fs.createReadStream("../image/img_1.jpg");

// 每次讀取完部分文件內容時，（chunk是讀取到的內容）
rs.on("data", chunk => {
    // 65536 => 64kb
    console.log(chunk.length, chunk);
});

// 讀取完成事件
rs.on("end", () => {
    console.log("讀取完成");
});