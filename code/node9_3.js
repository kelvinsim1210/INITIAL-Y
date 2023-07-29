// 獲取請求路徑，查詢字符串
// （不用導入url模塊）
// http://127.0.0.1:9000/login?Name=kelvin&Password=1210

const http = require("http");
// 建立服務對象
const server = http.createServer((request, response) => {
    // 實例化url對象
    let url = new URL(request.url, "http://127.0.0.1:9000");
    // console.log(url);
    // 可以直接調取返回值裡面的pathname
    let {pathname} = new URL(request.url, "http://127.0.0.1:9000");
    console.log(pathname);
    // 獲取請求路徑
    console.log(url.pathname);
    // 獲取查詢內容
    console.log(url.searchParams);
    // 獲取查詢內容特定值
    console.log(url.searchParams.get("Name"));

    // response.end("welcome");
    response.end();
});

// 監聽端口，啟動服務
server.listen(9000, () => {
    console.log("服務已經啟動");
});