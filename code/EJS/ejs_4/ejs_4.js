// 在express中使用模板引擎

const express = require("express");
const path = require("path");
const app = express();

// 設置模板引擎為ejs
app.set("view engine", "ejs");
// 設置模板引擎的存放位子（用path.resolve合成絕對路徑）
app.set("views", path.resolve(__dirname, "./views"));

app.get("/Page1", (req, res) => {
    let tittle = "eihei";
    // 用render來響應模板，他會去上面宣告的模板引擎存放位子尋找文件
    res.render("Page1", {tittle});
    // res.send("Page1");
});

app.listen(8000, () => {
    console.log("8000服務啟動");
});