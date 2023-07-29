// mongoose 模塊化

// 導入鏈接資料庫模塊
const db = require("./db/db");
// 導入模型模塊
const BookModel = require("./models/BookMoodels");
const mongoose = require("mongoose");

// 調用函數
// 因為 success 和 error 是函數，所以這邊也要傳入函數
// error 函數在資料庫模塊里進行處理，不在這邊傳入
db(() => {
    // console.log("鏈接成功");
    
    BookModel.create({
        name: "第四本書",
        author: "作者四",
        price: 400
    }).then(data => {
        console.log(data);
    }).catch(err => {
        console.log(err);
        return;
    });
    
    setTimeout(() => {
        mongoose.disconnect();
    }, 3000);
});