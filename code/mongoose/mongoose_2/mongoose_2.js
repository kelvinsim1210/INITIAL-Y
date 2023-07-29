// 插入文檔

const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/bilibili");

// 設置回調
// 鏈接成功的回調
// 建議鏈接方法使用 once （once表示該回調函數只會執行一次）（用途：防止掉線重連過後重複調用該函數）
mongoose.connection.once("open", () => {
    // console.log("鏈接成功");
    // 創建文檔結構對象
    // 設置文檔屬性以及屬性類型
    // 數據對象有 String, Number, Boolean, Array, Date, Buffer 
    let BookSchema = new mongoose.Schema({
        name: String,
        author: String,
        price: Number
    });

    // 創建模型對象
    // 對文檔進行操作的對象
    // （集合名稱， 結構對象）
    let BookModel = mongoose.model("books", BookSchema);

    // 新增文檔
    // 數據對象， 回調函數
    BookModel.create({
        name: "第一本書",
        author: "作者一",
        price: 100
    }).then(data => {
        console.log(data);
    }).catch(err => {
        console.log(err);
        return;
    });
    
    setTimeout(() => {
        // 斷開mongo資料庫鏈接
        mongoose.disconnect();
    }, 3000);
});

// 鏈接失敗的回調
mongoose.connection.on("error", () => {
    console.log("鏈接失敗");
});

// 鏈接關閉的回調
mongoose.connection.on("close", () => {
    console.log("鏈接關閉");
});