// Ham buit-in

// Ham console

console.log("Noi dung xuat hien tren man hinh");
console.warn("Noi dung chi lap trinh vien nhin thay");
console.error("Thong bao loi");

// Ham setTimeout

function Hello(a){
    a = "Hello";
    console.log(a);
    console.log("Hoc ve ham setTimeout");
}
setTimeout(Hello,1000);
// Sau 1s chay vao thuc hien ham va chi thuc hien ham 1 lan duy nhat

// setInterval

// setInterval(Hello,1000); 
// cứ sau thời gian được set nó sẽ chạy vào và thực hiện hàm


// String

// length trả về độ dài chuỗi

var fullName = `Kien`;
console.log(fullName.length); // do dai 4

// indexOf() tim vi tri 1 chuoi trong 1 chuoi neu ko tim thay tra ve -1

var mystring= "Xin chao ban toi ten la Kien";
console.log(mystring.indexOf("Kien"));
console.log(mystring.indexOf("kien"));

// slice() dung de cat 1 chuoi tra ve 1 chuoi moi

var stringg= "0123456789";
console.log(stringg.slice(0,3));
console.log(stringg.slice(1,7));
console.log(stringg.slice(2,4));
// chi lay gia tri sat voi vi tri end 

// replace()
var mystring = "Xin chao toi ten Kien, nam nay toi 18 tuoi";
console.log(mystring.replace("toi", "ban"));
console.log(mystring.replaceAll("toi", "ban"));
console.log(mystring.replace("/toi/g", "ban"));

// toUpperCase() va toLowerCase();

console.log(mystring.toLocaleLowerCase());
console.log(mystring.toUpperCase());

// trim() bo di khoang trang o dau va cuoi

var khoangtrang= "           kien         nguyen           ";
console.log(khoangtrang.trim());

// split() chuyen 1 chuoi thanh 1 mang 
var myStr= "HTML, CSS, JS, C++, Pythond";
console.log(myStr.split(", "));

//Arrayy
// join chuyen 1 mang thanh 1 chuoi
// pop  xoa phan tu cuoi mang va tra phan tu da xoa
// push them phan tu vao cuoi vao mang
// shift() xoa phan tu o dau mang
// unshift() chen phan tu vao dau mang
// splice() xoa hoac chen phan tu moi vao mang
// concat nối mảng
// slice() cat mang
// ARRAY METHODS - JAVASCRIPT

// 1. join() - chuyển mảng thành chuỗi
var arr1 = ["HTML", "CSS", "JS"];
console.log(arr1.join(" - ")); // HTML - CSS - JS

// 2. pop() - xóa phần tử cuối và trả về phần tử đã xóa
var arr2 = ["HTML", "CSS", "JS"];
console.log(arr2.pop()); // JS
console.log(arr2);       // ["HTML", "CSS"]

// 3. push() - thêm phần tử vào cuối mảng
var arr3 = ["HTML", "CSS"];
arr3.push("JS");
console.log(arr3); // ["HTML", "CSS", "JS"]

// 4. shift() - xóa phần tử đầu mảng
var arr4 = ["HTML", "CSS", "JS"];
console.log(arr4.shift()); // HTML
console.log(arr4);         // ["CSS", "JS"]

// 5. unshift() - thêm phần tử vào đầu mảng
var arr5 = ["CSS", "JS"];
arr5.unshift("HTML");
console.log(arr5); // ["HTML", "CSS", "JS"]

// 6. splice() - xóa / chèn / thay thế phần tử
var arr6 = ["HTML", "CSS", "JS", "C++"];

// Xóa 2 phần tử từ vị trí 1
arr6.splice(1, 2);
console.log(arr6); // ["HTML", "C++"]

// Chèn phần tử vào vị trí 1
arr6.splice(1, 0, "Python");
console.log(arr6); // ["HTML", "Python", "C++"]

// Thay thế phần tử tại vị trí 1
arr6.splice(1, 1, "Java");
console.log(arr6); // ["HTML", "Java", "C++"]

// 7. concat() - nối mảng
var a = ["HTML", "CSS"];
var b = ["JS", "Python"];
var c = a.concat(b);
console.log(c); // ["HTML", "CSS", "JS", "Python"]

// 8. slice() - cắt mảng (không làm thay đổi mảng gốc)
var arr8 = ["HTML", "CSS", "JS", "C++"];
console.log(arr8.slice(1, 3)); // ["CSS", "JS"]
console.log(arr8);             // ["HTML", "CSS", "JS", "C++"]