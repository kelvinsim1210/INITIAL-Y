// 獲取請求路徑，查詢字符串
// http://127.0.0.1:9000/login?Name=kelvin&Password=1210

const http = require("http");
const url = require("url");
// 建立服務對象
const server = http.createServer((request, response) => {
    // 請求路徑
    // console.log(request.url);
    response.end("url");

    // 解析收到的請求信息
    let res = url.parse(request.url);
    // console.log(res);

    // 如果第二個參數加上true就會把查詢字符串轉成對象
    let res2 = url.parse(request.url, true);
    console.log(res2);

    // 可以查詢請求的對象以及內容
    console.log(res2.query);
    // 查詢請求的路徑
    console.log(res2.pathname);
});

// 監聽端口，啟動服務
server.listen(9000, () => {
    console.log("服務已經啟動");
});