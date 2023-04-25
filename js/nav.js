/*============Menu Icons Showing===========*/
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

/*============Scrolling Codes===========*/
var tags = document.querySelectorAll(".header a");
tags.forEach((element) => {
  element.addEventListener("click", (e) => {
    let menuIcon = document.querySelector(".navbar");
    menuIcon.classList.remove("active");
    var clas = e.target.getAttribute("class");
    if (element.getAttribute("class") == "active") {
      element.classList.remove("active");
    }
    if (!clas) {
      e.target.classList.add("active");
    }
  });
});
