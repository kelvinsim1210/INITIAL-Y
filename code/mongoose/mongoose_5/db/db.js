// 鏈接部分模塊化

/** 
* @param {*} success 數據庫鏈接成功的回調函數
* @param {*} error 數據庫回調失敗的函數
*/

// 暴露整個function
// 這個function包含了各個回調函數
module.exports = function(success, error) {
    // 將 error 參數放在這裡處理（可以少傳一個函數）
    // 如果 error 不是一個函數，就是報錯
    if(typeof error !== "function") {
        error = () => {
            console.log("鏈接失敗");
        }
    }

    const mongoose = require("mongoose");

    // 調用數據庫配置
    const {DBHost, DBPort, DBName} = require("../config/config");
    mongoose.connect(`mongodb://${DBHost}:${DBPort}/${DBName}`);
    
    mongoose.connection.once("open", () => {
        success();
    });
    
    // 鏈接失敗的回調
    mongoose.connection.on("error", () => {
        error();
    });
    
    // 鏈接關閉的回調
    mongoose.connection.on("close", () => {
        console.log("鏈接關閉");
    });
}