// 前台路由中間件

const express = require("express");
// 創建路由對象
const router = express.Router();

router.get("/Home1", (req, res) => {
    res.send("Home1");
});

router.get("/Home2", (req, res) => {
    res.send("Home2");
});

// 暴露
module.exports = router;