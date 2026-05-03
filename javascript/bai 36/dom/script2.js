// 1 Khai niem DOM
// 2 DOM element

// querySelector
var el1 = document.querySelector(".box");
console.log(el1);

var el2 = document.querySelector("#text");
console.log(el2)

// querySelectAll
var el3 = document.querySelectorAll(".box");
console.log(el3);

el3.forEach((item)=>{
      console.log(item.innerHTML);
})

// 3 DOM element 
// 3.1 Noi dung the HTML
// Lay noi dung the HTML
const test = document.querySelector("h1").innerHTML;
console.log(test);

console.log(document.querySelector("h2").innerHTML);
// Thay doi noi dung the HTML
var test2 = document.querySelector("h1").innerHTML = "Luyen tap ve cach su dung DOM ";
console.log(test2);

console.log(document.querySelector("h1").innerHTML);

// 3.2 Thuoc tinh the HTML
const test32 = document.querySelector("h2").getAttribute("class");
console.log(test32);
const test322 = document.querySelector("h1").getAttribute("ms");
console.log(test322);

document.querySelector("h2").setAttribute("mss","Kiennnnn");

// 4. DOM CSS
  el1.style.color ="blue";
  el1.style.fontSize = "40px";
// 5. DOM Event 
const inputSearch = document.querySelector(".search");
console.log(inputSearch);

inputSearch.onkeyup = () => {
  const value = inputSearch.value;
  document.querySelector("h3").innerHTML = value;
}
