// console.log("Hello Cybersoft!");
// console.log("Nguyen Thanh An"); 

// Variable (biến) 
// Data tybe (kiểu dữ liệu)
// - string (chuỗi) 
// - numnber
// - boolean (true/false)
// - undefined (k giá trị, k xác định)
// - null (rỗng)


var username = "Hello Cybersoft!";
console.log("Username: " + username);

var address = "112 Cao Thang";
console.log("Dia Chi: " + address);

var numberStudents = 40;
console.log("Si so lop: " + numberStudents);

var isLogin = true;

// khai báo biến(undefined) 
var fisrtName;
// gán giá trị cụ thể vào biến dc khai báo 
fisrtName = "Dinh";
console.log(fisrtName);

/** */
// Các loại toán tử 
// +
var num1 = 20;
var num2 = 5;
var num12 = num1 + num2;
console.log("Tong: " + num12);

// -
var num3 = 10;
var num4 = 5;
var num34 = num3 - num4;
console.log("Hieu: " + num34);

// * (Nhân)
var num5 = 10;
var num6 = 2;
var num56 = num5 * num6;
console.log("Tich: " + num56);

// / (Chia)
var num7 = 10;
var num8 = 2;
var num78 = num7 / num8;
console.log("Thuong: " + num78);

// %
var num9 = 10;
var num10 = 2;
var num910 = num9 % num10;
console.log(num910);

// ++: Tăng 1 đơn vị
var count = 0;
// count++; // count = count + 1;
// console.log(count);

var newCount = count++;
console.log("newCount: " + newCount);

// --: giảm 1 đơn vị 

// +=: phép gán  
var sum = 0;
sum += 5; // sum = sum + 5;
console.log("sum: " + sum);
//----------------------

//*** Hằng Số (ES6) */
const PI = 3.14;
console.log(PI);

// Mô hình 3 khối 
// - Đầu vào: 
// + Số thứ 1
// + Số thứ 2
// - Xử lý:
// + Số thứ 1 + Số thứ 2
// - Đầu ra:
// + In kết quả tổng


// Tính cạnh huyền
/** - Đầu vào: 2 cạnh góc vuông
    + cạnh1: 3 
    + cạnh2: 4
- Xử Lý
    + bình phương canh goc vuong canh1: canh1 * canh1
    + bình phương canh goc vuong canh2: canh2 * canh2
    + tổng binh phuong 2 canh goc vuong: tongBinhPhuong = (canh1 * canh1) + (canh2 * canh2)
    + can bac hai cua tongBinhPhuong: Math.sqrt(tongBinhPhuong)
- Đầu ra
  + Xuat ket qua 
*/

var canh1 = 3;
var canh2 = 4;
var tongBinhPhuong = (canh1 * canh1) + (canh2 * canh2);
var canhHuyen = Math.sqrt(tongBinhPhuong);
var result = "canh huyen la: " + canhHuyen;
console.log(result);


// Bài 1 
var luong1ngay = 100.000;
var luong = luong1ngay * 30;
var result = "luong là: " + luong;
console.log(result);

// Bài 2 

var a = 2;
var b = 4;
var c = 6;
var d = 8;
var e = 10;
var giatriTB = (a + b + c + d + e) / 5;
var result = "gia tri trung binh là: " + giatriTB;
console.log(result);

// Bài 3 

var usd = 23.500;
var vnd = 0;
var result = "nhap usd vao: ";
console.log(result);


// Bài 4 
var chieudai = 5;
var chieurong = 7;
var dientich = "Dien tich la: " + (chieudai * chieurong);
var chuvi = "Chu vi la: " + ((chieudai + chieurong) * 2);
console.log(dientich);
console.log(chuvi);


// Bài 5 

var a = 12;
var so_hang_dv = a % 10;
var so_hang_chuc = a / 10;


















