// Bai 1

var x = 5;
var y = 3;

// addition
console.log("x + y = ", x + y); // 8

// subtraction
console.log("x - y = ", x - y); // 2

// multiplication
console.log("x * y = ", x * y);// 15

// division
console.log("x / y = ", x / y); //1.67

// remainder
console.log("x % y = ", x % y); // 2

// increment
console.log("++x = ", ++x); // 6
console.log("x++ = ", x++); // 6
console.log("x = ", x); // 7

// decrement
console.log("--x = ", --x); // 6
console.log("x-- = ", x--); // 6
console.log("x = ", x); // 5

//exponentiation
console.log("x ** y =", x ** y); // 125

// Bai 2

// equal operator
console.log(2 == 2); true
console.log(2 == '2'); true

// not equal operator
console.log(3 != 2); true
console.log('hello' != 'Hello'); true

// strict equal operator
console.log(2 === 2); true
console.log(2 === '2'); false

// strict not equal operator
console.log(2 !== '2'); true
console.log(2 !== 2); false

// Bai 3

// logical AND
console.log(true && true); // true
console.log(true && false); // false

// logical OR
console.log(true || false); // true

// logical NOT
console.log(!true); // false

// Bai 4

console.log("hello" + "world"); // helloworld

var a = "JavaScript";

a += " tutorial";
console.log(a); // Javascript tutorial

// Bai 5

var value1 = "one";
var value2 = "two";
var tmp = value1;
value1 = value2;
value2 = tmp;
console.log("Value1: ", value1);
console.log("Value2: ", value2);

// Bai 6

function squareAreasDifference(r) {
  var S = 2 * r**2;
  return S;
};


var test1 = squareAreasDifference(5);
console.log(test1); // 50

var test2 = squareAreasDifference(6);
console.log(test2); // 72

var test3 = squareAreasDifference(7);
console.log(test3); // 98

// Bai 7

var palindrome = (s) => {
    var isCheck = true;
    for(let i = 0 ; i < s.length/2; i++){
        if(s[i] != s[s.length - i - 1]){
            isCheck = false;
            break;
        }
    }
    return isCheck;
}
console.log(palindrome("HeeH"));
console.log(palindrome("HiiiH"));
console.log(palindrome("Kien"));

// Bai 8

console.log(typeof "Le Van A"); //string
console.log(typeof 5000); // number
console.log(typeof 5000.99); //number
console.log(typeof [10, 15, 17]); //object
console.log(typeof { name: "Le Van A", age: 18, country: "Viet Nam" }); // object
console.log(typeof true); // boolean
console.log(typeof false); // boolean
console.log(typeof undefined); // undefined
console.log(typeof null); // object

// Bai 9

var img = "https://cdn.daca.vn/media/blog/lap-trinh/js%20tips%20-%20m%E1%BB%99t%20s%E1%BB%91%20c%C3%A1ch%20vi%E1%BA%BFt%20js%20ng%E1%BA%AFn%20g%E1%BB%8Dn%20h%C6%A1n.png";
var title = "JS TIPS - Một số cách viết JS ngắn gọn hơn";
var desc = "Hôm nay Daca.vn gửi tới các bạn một số những tips để giúp bạn code JS một cách hiệu quả...";
var url = "https://daca.vn/js-tips-mot-so-cach-viet-js-ngan-gon-hon";

var string = `
  <div class="article">
    <a href="${url}">
    <div class="inner-image">
      <img src="${img}" />
    </div>
    <div class="inner-content">
      <h2 class="inner-title">${title}</h2>
      <p class="inner-desc">${desc}</p>
    </div>
    </a>
  </div>
`;

console.log(string);

// <div class="article">
//     <a href= "https://daca.vn/js-tips-mot-so-cach-viet-js-ngan-gon-hon">
//     <div class="inner-image">
//       <img src="https://cdn.daca.vn/media/blog/lap-trinh/js%20tips%20-%20m%E1%BB%99t%20s%E1%BB%91%20c%C3%A1ch%20vi%E1%BA%BFt%20js%20ng%E1%BA%AFn%20g%E1%BB%8Dn%20h%C6%A1n.png"/>
//     </div>
//     <div class="inner-content">
//       <h2 class="inner-title">"JS TIPS - Một số cách viết JS ngắn gọn hơn"</h2>
//       <p class="inner-desc">"Hôm nay Daca.vn gửi tới các bạn một số những tips để giúp bạn code JS một cách hiệu quả..."</p>
//     </div>
//     </a>
//   </div> // day chinh la noi dung bai  9 xuat hien tren man  hinh

// bai 10

var a = "100";
var b = 20;
var c = true;

console.log(+a + b + c); // 121
console.log(+"30" + 15);
// Dau + truoc chuoi co tac dung ep kieu chuoi sang so

// bai 11 

var a = 10;

a = a + 20; 
console.log(a); // 30

a = a + 70;
console.log(a); // 100

a += 100;
console.log(a); // 200

a -= 50;
console.log(a); // 150

a /= 50;
console.log(a); // 3

// bai 12

var a = 10;
var b = "20";
var c = 80;

var test1 = ++a + +b++ + +c++ - +a++; 
console.log(test1); // 100
console.log(a, b, c); // a = 12  b = 21 c = 81
console.log("------------");
console.log(typeof b); // number


var test2 = ++a + -b + +c++ - -a++ + +a; // 13  - 21 + 81 + 13 + 14 = 100
console.log(test2);
console.log(a, b, c);// 14  21 82
console.log("------------");

var test3 = --c + +b + --a * +b++ - +b * a + --a - +true; 
console.log(test3);// 100
console.log(a, b, c); // 12 22  81
console.log("------------");

// bai 13

