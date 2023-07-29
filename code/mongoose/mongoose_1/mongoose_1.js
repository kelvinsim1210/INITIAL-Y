// 導入mongoose

const mongoose = require("mongoose");
// 建立鏈接（協議名稱://ip//要操作的數據庫）【默認端口是27017，可以去mongod服務頁面看到】
mongoose.connect("mongodb://127.0.0.1:27017/bilibili");

// 設置回調
// 鏈接成功的回調
// 建議鏈接方法使用 once （once表示該回調函數只會執行一次）（用途：防止掉線重連過後重複調用該函數）
mongoose.connection.once("open", () => {
    console.log("鏈接成功");
    
});

// 鏈接失敗的回調
mongoose.connection.on("error", () => {
    console.log("鏈接失敗");
});

// 鏈接關閉的回調
mongoose.connection.on("close", () => {
    console.log("鏈接關閉");
});

// 設置3秒後斷開鏈接
setTimeout(() => {
    mongoose.disconnect();
}, 3000);