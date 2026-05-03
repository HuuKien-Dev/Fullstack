// DOM element

const buttonCreate = document.querySelector(".section-1 .inner-create");
console.log(buttonCreate);

const buttonDelete = document.querySelectorAll(".section-1 .inner-delete");
console.log(buttonDelete);

// DOM html

const title = document.querySelector(".title");
console.log(title.innerHTML);
title.innerHTML = "Tieu de duoc thay doi";
console.log(title.innerHTML);

// Dom csss


const title1 = document.querySelector(".title");
title1.style.color = "red";
title1.style.fontSize = "40px";
title1.style.fontWeight = "700";
title1.style.textAlign = "center";

// DOM event 

const search = document.querySelector(".input-search");
search.onfocus = () => {
    console.log("Da co ng click vo o tim kiem");
}

search.onblur = () => {
    console.log("Thoat khoi su kien nhap");
}