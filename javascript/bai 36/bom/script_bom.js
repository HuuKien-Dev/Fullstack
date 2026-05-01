console.log(window);
console.log(window.innerHeight); // chieu cao cua tai lieu
console.log(window.innerWidth); // chieu rong cua cua tai lieu
let tab;
function openTab() {
    tab = window.open("https://pnh.vn/dang-ky-hoc/?fbclid=IwY2xjawRgRi5leHRuA2FlbQIxMABicmlkETFVb2k5UXBLMHBFUFRXME9xc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHrd1q-QDr8qyeDQ8pjl3AbtHJur6MHJCqP9hemQtKeGdQVihAPZZw7ox5A4-_aem_LxLsEw7dtMLtVnenk3LUJQ");
}

function closeTab(){
   tab.close();
}

console.log(window.location);
let herf = window.location.href;
console.log(herf);

console.log(window.screen.width);
console.log(window.screen.height);

console.log(window.history);
console.log(window.navigator);