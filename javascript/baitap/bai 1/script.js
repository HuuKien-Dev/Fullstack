// Link bai tap: https://dacavn.notion.site/Ch-Javascript-B-i-t-p-1-2f7fb10e5bf78110b690c03718fb40cf#f9300e99d7844969b4161705457106f5



// Phan 1 Khai bao bien va kieu du lieu nguyen thuy


// Bai 1
var firstName = "Kien";
var lastName = "Nguyen Huu ";
var fullName = lastName + firstName;
console.log(fullName);
// Bai 2
const PI = 3.14;
var r = 10;
var circlePerimeter = 2 * PI * 3.14;
console.log("Chu vi: ",circlePerimeter);
// Bai 3
var productName = "Laptop";
var price = 15000000;
console.log(`San pham ${productName} co gia ${price} dong`);
// Bai 4
var isStudent = true;
var emptyValue = null;
var unknownValue;
console.log(isStudent);
console.log(emptyValue);
console.log(unknownValue);
// Bai 5
console.log(typeof isStudent);
console.log(typeof emptyValue);
console.log(typeof unknownValue);

//Phan 2 Toan tu

// Bai 6
var x = 10;
var y = 3;
console.log("Tong: ", x + y);
console.log("Hieu: ",x - y);
console.log("Tich: ", x * y);
console.log("Du: ", x % y);
console.log("Luy thua: ", x ** y);
// Bai 7
var count = 0;
count++;
count += 5;
count *= 2;
console.log(count);
// Bai 8
console.log(5 > 3);
console.log("5" == 5);
console.log("10" === 10);
// Bai 9
var isAdult = true;
var hasTicket = false;
var canEnter = isAdult && hasTicket;
var isFree = isAdult || hasTicket;
console.log(canEnter);
console.log(isFree);
// Bai 10
var isRainy = true;
var goPicnic = ! isRainy;
console.log(goPicnic);

// Phan 3 Ham mui ten

// Bai 11
var sayHello = (name) => "Xin chao, " + name;
console.log(sayHello("Kien"));
// Bai 12
var sum = (a, b) => a +b;
console.log(sum(3,6));
// Bai 13
var square = (n) => n ** 2;
console.log(square(6));
// Bai 14
var isEvent = (n) => n % 2 === 0;
console.log(isEvent(5));
console.log(isEvent(6));
// Bai 15
var cToF = (C) =>  C * 1.8 + 32;
console.log(cToF (10));

// Phan 4 Doi tuong va mang

// Bai 16
var user = {
    name: "Kien",
    age: 20,
    email: "24022807@vnu.edu.vn"
}
console.log(user.email);
console.log(user["name"]);
// Bai 17
user.age = 26;
user["role"] = "Admin";
console.log(user);
// Bai 18
var color = ['Red','Green','Blue'];
console.log(color.length);
console.log(color[color.length - 1]);
// Bai 19

// Phan 5 bai tap tong hop

// Bai 21
var calcTotal = (price,quantity) => price * quantity;
console.log(calcTotal(10000, 36));
// Bai 22
var checkPass = (score) => score >= 5;
console.log(checkPass(7));
console.log(checkPass(3));
// Bai 23
var obj1 = {
    a: 1
}
var obj2 = {
    a: 1
}
console.log(obj1 === obj2);
// ket qua false vi so sanh tham chieu ko so sanh ket qua
// Bai 24
var userA = {
    name: "A"
}
var userB ={...userA, name: "B"};
console.log(userA);
console.log(userB);
// Bai 25
var createProduct = (name , price) => ({name: name, price: price});
var Product1 = createProduct("Sua", 100000);
console.log(Product1);