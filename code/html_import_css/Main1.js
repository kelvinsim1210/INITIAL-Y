// 如何正確導入各種文件

const fs = require("fs");
const http = require("http");

const server = http.createServer((request, response) => {
    let url = new URL(request.url, "http://127.0.0.1");

    if(url.pathname) {
        // console.log();
        console.log(__dirname + url.pathname);
        try {
            let ReadFile = fs.readFileSync(__dirname + url.pathname);
            response.end(ReadFile);
        }
        catch(err) {
            response.statusCode = 404;
            response.end();
        }
    }
    // else {
    //     response.statuscode = 404;
    //     response.end();
    // }
});

// 啟動服務，監聽端口
server.listen(9000, () =>{
    console.log("服務已經啟動");
});