// 批量修改文件名稱

const fs = require("fs");

// 讀取文件夾
const Files = fs.readdirSync("../text2");

// 曆邊文件夾
Files.forEach(item => {
    // 拆分文件名稱
    let Data = item.split("-");
    // console.log(Data);  // 查看當前分割狀況
    let [Num, Name] = Data;
    // 小於10的補0
    if(Num < 10) {
        Num = `0${Num}`;
    }
    // 重新拼接成文件名稱
    let NewName = `${Num}-${Name}`;
    // (舊地址，新地址)
    fs.renameSync(`../text2/${item}`, `../text2/${NewName}`);
});