// 設置響應狀態碼
// 可以在網頁F12的Headers查看

const http = require("http");
// 建立服務對象
const server = http.createServer((request, response) => {
    // 設置響應狀態碼
    response.statusCode = 203;
    // 設置響應狀態的描述
    response.statusMessage = "ILoveYou";
    // 響應頭(“響應頭”，“響應內容”)
    response.setHeader("Server", "KSKL");
    response.setHeader("MyHeader", "CGCT");
    // 多個同名響應頭的設置
    response.setHeader("Text", ["A", "B", "C"]);

    // 設置響應體(可設定多個)
    response.write("EHEI1");
    response.write("EHEI2");
    response.write("EHEI3");
    response.end();
});

// 監聽端口，啟動服務
server.listen(9000, () => {
    console.log("服務已經啟動");
});