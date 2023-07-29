// 複製文件

const fs = require("fs");
// 讀取文件內容
let data = fs.readFileSync("../image/img_1.jpg");
// 寫入新的文件
fs.writeFileSync("../image/img_2.jpg", data);

// ----------
// 文件流式寫入（較不佔內存）
// 讀取流對象
const rs = fs.createReadStream("../image/img_1.jpg");
// 寫入流對象
const ws = fs.createWriteStream("../image/img_3.jpg");

// 讀取事件
rs.on("data", chunk => {
    ws.write(chunk)
});


// 內建函數
// rs.pipe(ws);