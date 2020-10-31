let toggle = document.querySelectorAll(".acc_toggle");
let content = document.querySelectorAll(".acc_content");
let icons = document.querySelectorAll(".icon");

for (let i = 0; i < toggle.length; i++) {
    toggle[i].addEventListener("click", function(){
        icons[i].classList.toggle("rotate");
        content[i].classList.toggle("open");
    })
}