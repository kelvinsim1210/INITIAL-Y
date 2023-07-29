// 體驗express
// 類似於http服務

const express = require("express");

const app = express();

// get方法訪問/Home
app.get("/Home", (req, res) => {
    res.end("Wellcome express");

    // express 獲取訪問內容
    // 訪問地址
    console.log(req.path);
    // 訪問內容
    console.log(req.query);
    // 獲取ip
    console.log(req.ip);
    // 獲取請求頭
    console.log(req.get("host"));
});

// post方法訪問/
app.post("/", (req, res) => {
    res.end("Wellcome express with post");
});

// 路由參數訪問（：變數 <= 只能是數字）
app.get("/:id.html", (req, res) => {
    // 獲取url路由參數（id是自己給的變數，獲取參數那邊也要和上面設置的變數名稱相同）
    console.log(req.params.id);
    res.end(req.params.id);
});

// express 設置響應
app.get("/text1", (req, res) => {
    // 設置狀態碼
    // res.status(500);
    // 設置響應體
    // res.set("abc", "123");
    // 設置響應尾
    // res.send("會自動添加響應頭，允許中文");

    // 允許鏈式調用
    res.status(500).set("abc", "123").send("會自動添加響應頭，允許中文");
});

// 其他響應
app.get("/other", (req, res) => {
    // 跳轉響應
    // res.redirect("https://bilibili.com");
    // 下載響應
    // res.download(__dirname + "/package.json");
    // json響應
    // res.json({
    //     name: "kelvin",
    //     slogon: "誒嘿"
    // })
    // 響應文件內容（html內容之類）
    res.sendFile(__dirname + "/express_1.html");
});

// 所有方法訪問所有地址
app.all("*", (req, res) => {
    res.end("404 not found");
});

app.listen(8000, () => {
    console.log("服務啟動");
});