// express插件 body-parser 的運用（用在在post請求時獲取請求體的插件）

const express = require("express");
const BodyParser = require("body-parser");
app = express();

// 建立解析請求體的中間件
// json格式解析
const JsonParser = BodyParser.json();
// querystring格式解析
const urlEncodedParser = BodyParser.urlencoded({extended: false});

app.get("/Page1", (req, res) => {
    res.sendFile(__dirname + "/Page1.html");
});

// 調用請求體格式解析
app.post("/Page1", urlEncodedParser, (req, res) => {
    // 在使用bodyparser解析請求體之後會在request添加一個叫body的屬性
    console.log(req.body);
    res.send("post");
});

app.listen(8000, () => {
    console.log("8000正在運行");
});