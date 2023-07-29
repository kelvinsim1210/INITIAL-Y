// 靜態資源中間件設置

const express = require("express");

const app = express();

// 設置靜態資源中間件
// 此時public文件夾就相當於127.0.0.1:8000的root
// 默認執行文件為index.html（功能和app.get("/")相同【通常是誰先響應就誰執行】）
app.use(express.static(__dirname + "/public"));

// 添加路由中間件，再次過濾訪問當前url的用戶是否滿足路由中間件設定的規則
app.get("/Page1", (req, res) => {
    res.send("Page1");
});

app.listen(8000, () => {
    console.log("服務已經啟動");
});