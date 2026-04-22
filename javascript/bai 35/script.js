// 1.Lam viev voi ham

// Ham dinh nghia 
console.log(sum(10,5));
function sum(a,b){
    return a + b;
}



// Ham bieu thuc
var sum1 = function() {
    var a = 10;
    var b = 10;
    return a + b;
}
console.log(sum1());



// Ham mui ten
var sum2 = (a,b) => {
    return a+b;
}
console.log(sum2(5,8));

// 2.Lam viec voi mang

var  inforUser = {
    name : "Nguyen Huu Kien"
}

inforUser.phone = "0399040019";
inforUser["email"] = "nguyenhukien@gmail.com";
console.log(inforUser);
delete inforUser.phone; // xoa 1 key khoi 1 doi tuong
console.log(inforUser);

// 3. Lam viecc voi mang

// forEach() 

// var ListSubject= [
//     {
//         ten: "Toan",
//         diem: 8,
//     },

//     {
//         ten: "Van",
//         diem: 7,
//     },
//     {
//         ten: "KHTN",
//         diem: 5,
//     },
// ];

//  ListSubject.forEach((item, index,array) =>{
//    console.log(item);
//    console.log(index);
//    console.log(array);
//    console.log("----------------------------");    
// });

// ListSubject.forEach((item, index) => {
//     if(item.diem >=7){
//       item["xep loai"]="Dat";
//     }
//     console.log(item["ten"]);
//     console.log(item.diem);
//     console.log("+++++++++++");
// });
// console.log(ListSubject);




// map - tra ve mang moi

var ListSubject = [
    { ten: "Toan", diem: 8 },
    { ten: "Van", diem: 7 },
    { ten: "Anh", diem: 6 },
    { ten: "Ly", diem: 9 },
    { ten: "Hoa", diem: 5 },
    { ten: "Sinh", diem: 7 }
];

var ListSubject2 =ListSubject.map((item,index, array)=>{    
    var xeploai=" ";
    if(item.diem >= 8){
            xeploai = "Gioi";
        }
        else xeploai = "Khong Gioi";
    return {
        diem: item.diem + 1,
        ten: item.ten,
        xeploai: xeploai,
        stt: index+1,
    };
});
console.log(ListSubject2);

// every

var check = ListSubject.every((item)=>{
    return item.diem >=4;
});
console.log(check);

// some

var check2 = ListSubject.some((item) => {
    return item.diem >10;
});

console.log(check2);

// find

var users = [
    { id: 1, fullName: "Nguyen Van An", age: 20 },
    { id: 2, fullName: "Tran Thi Binh", age: 22 },
    { id: 3, fullName: "Le Van Cuong", age: 19 },
    { id: 4, fullName: "Pham Thi Dung", age: 25 },
    { id: 5, fullName: "Hoang Van Huy", age: 18 },
    { id: 6, fullName: "Do Thi Linh", age: 21 },
    { id: 7, fullName: "Nguyen Van An", age: 23 },
    { id: 8, fullName: "Bui Thi Mai", age: 24 },
    { id: 9, fullName: "Dang Van Kien", age: 20 },
    { id: 10, fullName: "Nguyen Van An", age: 22 }
];

var user = users.find((item)=>{
    return item.fullName === "Bui Thi Mai";
})
console.log(user);

var user1 = users.find(item => item.fullName === "Dang Van Kien");
console.log(user1);


// filter

var userList = users.filter(item => item.fullName === "Nguyen Van An");
console.log(userList);

// reduce
var numbers = [2, 4, 6, 8, 10, 12, 14];
var sum = numbers.reduce((s,item)=> s + item,0);
console.log(sum);