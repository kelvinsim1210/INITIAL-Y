// 路由中間件

const express = require("express");

const app = express();

// 設置路由中間件
let CheckMiddleWare = (req, res, next) => {
    // 如果參數code為1210
    if(req.query.code === "1210") {
        // 繼續執行
        next();
    }
    else {
        res.send("代號錯誤");
    }
}

// 添加路由中間件，再次過濾訪問當前url的用戶是否滿足路由中間件設定的規則
app.get("/Page1", CheckMiddleWare, (req, res) => {
    res.send("Page1");
});

app.get("/Page2", CheckMiddleWare, (req, res) => {
    res.send("Page2");
});

app.get("/Page3", (req, res) => {
    res.send("Page3");
});

app.listen(8000, () => {
    console.log("服務已經啟動");
});