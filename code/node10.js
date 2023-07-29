// 導入html文件，響應于當前頁面

const http = require("http");
const fs = require("fs");

// 創建服務對象
const server = http.createServer((request, response) => {
    // 讀取文件內容
    let html = fs.readFileSync(__dirname + "/node10.html");
    let html2 = fs.readFileSync(__dirname + "/node10_2.html");

    // 當前請求路徑
    let url = new URL(request.url, "http://127.0.0.1:9000");
    console.log(url.pathname);

    if(url.pathname == "/Main") {
        response.end(html);
    }
    else if(url.pathname == "/Login") {
        response.end(html2);
    }
    else {
        response.end();
    }
});

// 啟動服務，監聽端口
server.listen(9000, () =>{
    console.log("服務已經啟動");
});