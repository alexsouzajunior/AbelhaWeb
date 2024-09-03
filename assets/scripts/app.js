document.addEventListener("DOMContentLoaded", function() {
  let burger = document.querySelectorAll(".burger");
  let menu = document.querySelectorAll(".menu");
  let close = document.querySelectorAll(".close-menu");
  let opacityMenu = document.querySelectorAll(".opacity-menu");

  if(burger.length && menu.length){
    for(let i = 0; i < burger.length; i++) {
      burger[i].addEventListener("click", function() {
        for(let e = 0; e < menu.length; e++){
            menu[e].classList.add("active");
        }
      });
    }
  }
  
  if(close.length) {
    for(let i = 0; i < close.length; i++){
      close[i].addEventListener("click", function() {
        for(let e = 0; e < menu.length; e++) {
          menu[e].classList.remove("active");
        }
      });
    }
  }

  if(opacityMenu.length){
    for(let i = 0; i < opacityMenu; i++){
      opacityMenu[i].addEventListener("click", function() {
        for(let e = 0; e < opacityMenu; e++){
          opacityMenu[e].classList.toggle("hidden");
        }
      });
    }
  }
});

let btn = document.querySelector(".search__btn");
let searchBox = document.querySelector(".search__container");
let closeBtn = document.querySelector(".close__btn");

  closeBtn.addEventListener("click", () => {
    searchBox.classList.remove("active");
  });

  btn.addEventListener("click", () => {
    searchBox.classList.add("active");
  });

$(document).ready(function () {
  $("#back-to-top").hide();

  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $("#back-to-top").fadeIn();
    } else {
      $("#back-to-top").fadeOut();
    }
  });

  $("#scrollToTop").click(function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      800
    );
    return false;
  });
});

let modalContact = document.querySelector(".modal");

const showModal = () => {
  modalContact.classList.add("active");
}
const closeModal = () => {
  modalContact.classList.remove("active");
}