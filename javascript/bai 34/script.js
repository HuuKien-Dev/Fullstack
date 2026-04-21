// cau lenh re nhanh if else
var a = 2;
var b = 6;
if(a > b ) console.log("a lon hon b");
else if (a == b) console.log("a bang b");
else console.log("a nho hon b");

var results = a > b ? "a lon hon b" : "a khong lon hon b";
console.log(results);

// switch case;
 var day = 3;
 switch(day){
    case 2: console.log("Thu 2");
    break;
    case 3: console.log("Thu 3");
    break;
    default: console.log("Chua xac dinh");
 }
 // vong lap for

 for(var i = 1; i <=10; i++){
    console.log("Hello: " + i);
 }

 // vong lap for of
var productList = [
  {
    name: "Sản phẩm 1",
    price: 20.000,
  },
  {
    name: "Sản phẩm 2",
    price: 40.000,
  },
  {
    name: "Sản phẩm 3",
    price: 60.000,
  },
  {
    name: "Sản phẩm 4",
    price: 80.000,
  },
  {
    name: "Sản phẩm 5",
    price: 100.000,
  },
];

for(var i of productList){
    console.log(`${i.name} - ${i.price}`);
}
 
// for in
var user = {
    name : "Kien",
    age: 20,
    address: "Hanoi",
    phone: "0399040019"
}
for(key in user){
        console.log(key);
        console.log(user[key]);
}

// while 
var a = 0;
while(a < 10){
  console.log("Hello", a);
  a++;
}
// do - while
do{
console.log("Hi " + a);
}while(a>10);

// tu khoa break , continue

// cach khai bao bien var let const

var a = 1;
// let b = 10; bien o muc do gioi han ko phai bien cuc bo
const c = 20;
console.log("a = ", a);
console.log("c = ", c);
//  c = 10;
//  console.log("c = ", c); ko the thay doi gia tri bien khi khai bao bang tu khoa const

for (let i = 0; i <5; i++){
  console.log("Kiem tra ", i);
}