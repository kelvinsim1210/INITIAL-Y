// 防盜鏈
// 通過檢測發起請求的域名來判斷是否允許訪問
// request的refere會記錄訪問來源

const express = require("express");
app = express();

// 設置全局中間件
app.use((req, res, next) => {
    // 獲取referer
    let referer = req.get("referer");
    if(referer) {
        let url = new URL(referer);
        let hostname = url.hostname;
        // console.log(hostname);
        if(hostname !== "127.0.0.1") {
            res.status(404).send("404 not found");
            return;
        }
    }
    next();
});

// 設置靜態資源中間件
app.use(express.static(__dirname + "/public"));

app.listen(8000, () => {
    console.log("8000正在運行");
});