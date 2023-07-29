// 獲取請求體

const http = require("http");
// 建立服務對象
const server = http.createServer((request, response) => {
    let Body = "";
    request.on("data", chunk => {
        Body += chunk;
    });

    request.on("end", () => {
        console.log(Body);
        response.end("Hello http");
    });
});

// 監聽端口，啟動服務
server.listen(9000, () => {
    console.log("服務已經啟動");
});