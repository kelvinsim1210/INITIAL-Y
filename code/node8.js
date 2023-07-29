// 創建http服務

// 導入http模塊
const http = require("http");

// 創建服務對象
const server = http.createServer((request, response) => {
    // 獲取請求的方法
    console.log(request.method);
    // 獲取請求的url
    console.log(request.url);
    // 獲取http協議版本號
    console.log(request.httpVersion);
    // 獲取http請求頭
    console.log(request.headers);
    // 獲取請求頭裡面的某個資料
    console.log(request.headers.host);

    // response.end("Hello HTTP Server");  // 設置響應體
    // 如果響應體包含中文，要設置一下header，把網頁編碼設置成utf-8才能避免中文亂碼
    response.setHeader("content-type", "text/html;charset=utf-8");
    response.end("歡迎訪問");  // 設置響應體
});

// 監聽端口，啟動服務
server.listen(9000, () => {
    console.log("服務已經啟動");
});

// 瀏覽器打開這個網址就可以訪問本機9000端口
// http://127.0.0.1:9000