// 模塊化內容

function Print1() {
    console.log("模塊1");
}
function Print2() {
    console.log("模塊2");
}

// 暴露多個模塊
module.exports = {
    Print1, 
    Print2
};