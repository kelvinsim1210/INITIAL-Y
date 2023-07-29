// 刪除文檔
// 更新文檔

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
    let BookMode1 = mongoose.model("books", BookSchema);

    // 刪除單一文檔 --------------------
    BookMode1.deleteOne({
        _id: "64bf9792c192711d3a69b9f5"
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

    // 批量刪除文檔 --------------------
    BookMode1.deleteMany({
        style: "科幻"
    }).then(data => {
        console.log(data);
    }).catch(err => {
        console.log(err);
        return;
    });

    // 更新單一文檔 --------------------
    // 第一個對象{查詢條件}，第二個對象{更新目標}
    BookMode1.updateOne({
        name: "第一本書"
    }, {
        price: 99
    }).then(data => {
        console.log(data);
    }).catch(err => {
        console.log(err);
        return;
    });

    // 批量更新文檔 --------------------
    BookMode1.updateMany({
        name: "第一本書"
    }, {
        price: 99
    }).then(data => {
        console.log(data);
    }).catch(err => {
        console.log(err);
        return;
    });

    // 尋找單一文檔 --------------------
    BookMode1.findOne({
        name: "第一本書"
    }).then(data => {
        console.log(data);
    }).catch(err => {
        console.log(err);
        return;
    });

    // 條件尋找單一文檔 --------------------
    // 在要添加搜尋條件的對象後面再設置一層對象
    // 運算符號使用對應的符號來代替【> $gt】【< $lt】【>= $gte】【<= $lte】【!== $ne】【$or】【$and】
    BookMode1.findOne({
        style: {
            $or: [{name: "第一本書"}, 
                  {name: "第二本書"}]
        },
        price: {
            $lt: 20
        }
    }).then(data => {
        console.log(data);
    }).catch(err => {
        console.log(err);
        return;
    });
    
    // 以id尋找文檔 --------------------
    BookMode1.findById(
        "64bf9792c192711d3a69b9f5"
    ).then(data => {
        console.log(data);
    }).catch(err => {
        console.log(err);
        return;
    });
        
    // 尋找單一文檔 --------------------
    // 如果不寫條件就是全部都列出來
    BookMode1.find({
        name: "第一本書"
    }).then(data => {
        console.log(data);
    }).catch(err => {
        console.log(err);
        return;
    });

    // 正則表達式，搜索書名帶有“三”的書
    BookMode1.find({
        name: /三/
    }).then(data => {
        console.log(data);
    }).catch(err => {
        console.log(err);
        return;
    });

    // 只提取需要的屬性（通過調用 select() 方法）
    // 需要的屬性標識為1，不要的屬性標識為0
    BookMode1.find().select({
        name: 1,
        author: 1
    }).then(data  => {
        console.log(data);
    }).catch(err => {
        console.log(err);
    });

    // 數據排序（使用 sort() 方法）
    // 1為升序，-1為倒敘
    BookMode1.find().sort({
        price: 1
    }).then(data  => {
        console.log(data);
    }).catch(err => {
        console.log(err);
    });

    // 數據截取（使用 limit() 方法）
    // limit(2) 只取2筆數據
    // skip(2).limit(2) 跳過2筆數據然後取2筆數據
    BookModel.find()
    .skip(2)
    .limit(2)
    .then(data  => {
        console.log(data);
    })
    .catch(err => {
        console.log(err);
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