// 後台路由中間件

const express = require("express");
// 創建路由對象
const router = express.Router();

router.get("/Admin1", (req, res) => {
    res.send("Admin1");
});

router.get("/Admin2", (req, res) => {
    res.send("Admin2");
});

// 暴露
module.exports = router;