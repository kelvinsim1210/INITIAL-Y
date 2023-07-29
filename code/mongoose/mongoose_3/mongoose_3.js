// 字段驗證
// 新增文檔

const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/bilibili");

// --------------------------------------------------------------------------------

// 設置回調
mongoose.connection.once("open", () => {
    // 創建文檔結構對象
    let BookSchema = new mongoose.Schema({
        // required（true 必須填寫）
        // unique（true 唯一不允許重複）
        name: {
            type: String,
            required: true,
            unique: true
        },
        // defaule（默認值）如果沒有輸入就填入默認值
        author: {
            type: String,
            default: "匿名"
        },
        // enum（填入的內容只允許是以下的內容）
        style: {
            type: String,
            enum: ["奇幻", "玄幻", "科幻"]
        },
        price: Number
    });

// --------------------------------------------------------------------------------

    // 創建模型對象
    let BookModel = mongoose.model("books", BookSchema);

    // 新增文檔
    BookModel.create({
        name: "第三本書",
        author: "作者三",
        style: "科幻",
        price: 220
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