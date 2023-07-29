console.log("Hello World");

let Buf = Buffer.alloc(10);
console.log(Buf);

// 不安全，可能會有舊數據殘留
// 速度較快
let Buf_2 = Buffer.allocUnsafe(10);
console.log(Buf_2);

// 轉unicode輸出
let Buf_3 = Buffer.from("hello");
console.log(Buf_3);

let Buf_4 = Buffer.from([12, 34, 56, 78, 90]);
console.log(Buf_4);

// 轉string
let Buf_5 = Buffer.from([105, 108, 111, 118, 101, 121, 111, 117]);
console.log(Buf_5.toString());

// 修改內容
let Buf_6 = Buffer.from("Hello");
Buf_6[0] = 95;
console.log(Buf_6.toString());

// 溢出（定義的大小超過8位2進制大小【255xd】）
let Buf_7 = Buffer.from("Hello");
Buf_7[0] = 355;  // 0001 0110 0011 => 0110 0011 (會捨棄超出8位的內容)
console.log(Buf_7);

// 中文
let Buf_8 = Buffer.from("你好");
console.log(Buf_8);  // 中文通常一個文字是占3個字節