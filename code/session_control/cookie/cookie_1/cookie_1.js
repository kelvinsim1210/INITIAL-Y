// 使用 express 進行 cookie 的建立

const express = require("express");
const CookieParser = require("cookie-parser");
const app = express();

// 使用查看cookie 內容的包
app.use(CookieParser());

app.get("/set-cookie", (req, res) => {
    // 這樣設置的cookie 會在瀏覽器關閉之後銷毀
    // res.cookie("name", "kelvin");
    // 設置 cookie 的生命週期，把第二個參數設置為 "lisi" ，然後給第三個參數裡面添加生命週期
    // 生命週期的時間單位為毫秒 1分鐘就是 60 * 1000毫秒
    res.cookie("name", "kelvin", {maxAge: 60*1000});
    res.send("設置 cookie 頁面");
});

app.get("/delete-cookie", (req, res) => {
    // 刪除cookie，把要刪除的cookie名字放入方法
    res.clearCookie("name");
    res.send("cookie 刪除成功");
});

app.get("/check-cookie", (req, res) => {
    console.log(req.cookies);
    res.send("獲取 cookie");
});

app.listen(8000, () => {
    console.log("8000 服務已啟動");
});