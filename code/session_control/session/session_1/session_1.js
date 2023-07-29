const express = require("express");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const app = express();

// 使用session 方法，方法裡面給一個方法
app.use(session({
    name: "kelvin",  // 設置session 的name，默認值是connect.sid
    secret: "kskl1210",  // 秘鑰，簽名，用於加密
    saveUninitialized: false,  // 用戶如果沒有用session 要不要自動創建一個session 對象
    resave: true,  // 是否在每次請求時重新保存session （session 其實是有時效的，如果在session 時效結束前自動更新一次session 就不會被強制退出session）
    store: MongoStore.create({
        mongoUrl: "mongodb://127.0.0.1:27017/bilibili"  // session 數據儲存在mongo 數據庫的位置
    }),
    cookie: {
        httpOnly: true,  // 開啟後無法通過js操作
        maxAge: 1000 * 60 * 5  // 設置sessionId 的過期時間
    }
}));

app.get("/", (req, res) => {
    res.send("Root");
})

app.get("/Login", (req, res) => {
    // 要求：name=admin&password=admin
    if(req.query.name === "admin" && req.query.password === "admin") {
        // 設置session
        req.session.name = "admin";
        res.send("登錄成功");
    }
    else {
        res.send("登錄失敗");
    }
});

app.get("/Shop", (req, res) => {
    // 檢測是否有登錄信息，直接檢查就可以
    // 在這邊細節的操作後台已經自動處理了，不用自己去數據庫調數據
    if(req.session.name) {
        res.send(`歡迎 ${req.session.name}`);
    }
    else {
        res.send("沒有登錄");
    }
});

app.get("/LogOut", (req, res) => {
    req.session.destroy(() => {
        res.send("已登出");
    });
});

app.listen(8000, () => {
    console.log("8000 服務已啟動");
});