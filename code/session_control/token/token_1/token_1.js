const jwt = require("jsonwebtoken");

// 創建token
// （{用戶數據}， 秘鑰， {配置對象}）
let token = jwt.sign(
    {name: "kelvin"},
    "kskl1210",
    {expiresIn: 1000 * 60}  // 時效
);

console.log(token);

// 校檢token
// 上面打印的token
let t = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoia2VsdmluIiwiaWF0IjoxNjkwNjIxMTk2LCJleHAiOjE2OTA2ODExOTZ9.MrSvtEWv0LHSTPoDvFzKRgsC2vSnlFp9-xhkcyMbWfM";

// （token字符串，秘鑰，回調函數）
jwt.verify(t, "kskl1210", (err, data) => {
    if(err) {
        console.log("校檢失敗");
        return;
    }
    console.log(data);
});