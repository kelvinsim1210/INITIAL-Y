// 文件重命名

const fs = require("fs");
// 原目標，目的目標，獲取錯誤 
fs.rename("../text/node_Y.txt", "../text/node_04.txt", err => {
    if(err) {
        console.log("重命名失敗");
        return;
    }
    console.log("重命名成功");
});


// 文件移動
fs.rename("../node_Y.txt", "../text/node_Y.txt", err => {
    if(err) {
        console.log("文件移動失敗");
        return;
    }
    console.log("文件移動成功");
});


// 刪除文件
fs.unlink("../text/node_Y.txt", err => {
    if(err) {
        console.log("文件刪除失敗");
        return;
    }
    console.log("文件刪除成功");
});

// --------------------------------------------------
// 建立文件夾
fs.mkdir("./Dir1", err => {
    if(err) {
        console.log("文件夾建立失敗");
        return;
    }
    console.log("文件夾建立成功");
});

// 遞歸式建立
// 調用方式{recursive: true}可以直接建立多層文件夾
fs.mkdir("./Dir1/Dir2/Dir3", {recursive: true}, err => {
    if(err) {
        console.log("遞歸文件夾建立失敗");
        return;
    }
    console.log("遞歸文件夾建立成功");
});

// 讀取文件夾
fs.readdir("../text", (err, data) => {
    if(err) {
        console.log("文件夾讀取失敗");
        return;
    }
    console.log(data);
});

// 刪除文件夾（只能刪除沒有內容的文件夾）
fs.rmdir("./Dir1", err => {
    if(err) {
        console.log(err);
        return;
    }
    console.log("文件夾刪除成功");
});

// 遞歸刪除文件夾
fs.rm("./Dir1", {recursive: true}, err => {
    if(err) {
        console.log(err);
        return;
    }
    console.log("文件夾遞歸刪除成功");
});

// 查看文件信息
fs.stat("../image/img_1.jpg", (err, data) => {
    if(err) {
        console.log("狀態讀取失敗");
        return;
    }
    console.log(data);

    // 是否為文件
    console.log(data.isFile());
    
    // 是否為文件夾
    console.log(data.isDirectory());
});


// ----------
// 相對路徑 --> 以命令執行區為基準，所以有時候會發生以外==意外的狀況
// 解決方法就是用相對路徑，可是手寫太麻煩
// 獲取當前文件上一級的絕對路徑
console.log(__dirname);