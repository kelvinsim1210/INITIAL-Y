// 路由模塊化
// 將路由中間件打包出去，優化主文件的負擔，也便於維護

const express = require("express");
const HomeRouter = require("./routers/HomeRouter.js");
const AdminRouter = require("./routers/AdminRouter.js");
// 創建應用對象
const app = express();

app.use(HomeRouter);
app.use(AdminRouter);

app.all("*", (req, res) => {
    res.send("404 not found");
});

app.listen(8000, () => {
    console.log("8000服務啟動");
});