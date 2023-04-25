"use strict";
function $(selector) {
  return document.querySelector(selector);
}

$("#menu").addEventListener("click", function (e) {
  e.preventDefault();
  $(".mobile-nav-toggle").style.display = "block";
  $(".mobile-nav-toggle").classList.toggle("mobile-menu");
});

var tag = document.querySelectorAll("#link");
for (let i = 0; i < tag.length; i++) {
  tag[i].addEventListener("click", function (e) {
    e.preventDefault();
    $(".mobile-nav-toggle").style.display = "none";
  });
}
