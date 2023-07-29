// 全局中間件
// 獲取訪問此服務的url和ip

const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();

// 建立全局 中間件函數（共用的執行動作）
// next是內建函數
function recordMiddleware(req, res, next) {
    // 獲取url，ip
    let {url, ip} = req;
    // 將資料保存在文件
    fs.appendFileSync(path.resolve(__dirname, "./access.log"), `${url} ${ip}\r\n`);
    // 調用next去執行之後的動作
    next();
}

// 調用中間件函數
app.use(recordMiddleware);

app.get("/Home", (req, res) => {
    res.send("Home");
});

app.get("/Page1", (req, res) => {
    res.send("Page1");
});

app.listen(8000, () => {
    console.log("服務啟動");
});