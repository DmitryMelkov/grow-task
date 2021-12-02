window.addEventListener("DOMContentLoaded", function () {
  //модальное окно
  let modal = document.getElementById("window-modal");
  let btn = document.getElementById("btn-modal");
  let closeBtn = document.getElementsByClassName("intro__modal-close")[0];

  btn.onclick = function () {
    modal.style.display = "block";
  };

  closeBtn.onclick = function () {
    modal.style.display = "none";
  };

  //тыкает вокруг окна
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };

  //бургер меню
  let burger = document.getElementById("nav_toggle");

  burger.addEventListener("click", myBurger);

  function myBurger() {
    let element = document.getElementById("nav");
    element.classList.toggle("open");
    burger.classList.toggle("active");
  }


});



// $("#nav_toggle").on("click", function (event) {
//   event.preventDefault();

//   $(this).toggleClass("active");

//   $("#nav").slideToggle("active");
// });
