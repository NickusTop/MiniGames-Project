document.addEventListener("DOMContentLoaded", function () {
  const toogleTheme = document.querySelector("#toggle");
  const divmain = document.getElementById("divmain");
  const divheader = document.querySelector(".div-header");
  const divfooter = document.querySelector(".div-footer");
  const search = document.querySelectorAll(".search");
  const line = document.querySelectorAll(".line");
  const buttons = document.querySelectorAll(".buttons");
  const buttonSc = document.querySelectorAll(".button-sc");
  const imgCalc = document.querySelector(".img-calc");
  const imgCalc2 = document.querySelector(".img-calc2");
  const imgCalc3 = document.querySelector(".img-calc3");
  const buttonCalc = document.querySelectorAll(".button-calc");
  const gameboard = document.querySelector(".gameboard");
  const pole = document.getElementById("pole");
  const buttonScientist = document.querySelectorAll(".button-scient");
  const swiperSlide = document.querySelectorAll(".swiper-slide");
  const swiperNext = document.querySelector(".path-next");
  const swiperPrev = document.querySelector(".path-prev");

  toogleTheme.addEventListener("change", changeTheme);

  function changeTheme() {
    const isDarkMode = toogleTheme.checked;
    const theme = isDarkMode ? "dark" : "light";
    localStorage.setItem("theme", theme);
    if (isDarkMode === true) {
      document.body.style.backgroundColor = "#000000";
      document.body.style.color = "#ffffff";
      divmain.style.backgroundColor = "#000000";
      divheader.style.backgroundColor = "#ffffff";
      line.forEach((line) => {
        line.style.backgroundColor = "#ffffff";
      });
      divfooter.style.backgroundColor = "#ffffff";
      search.forEach((search) => {
        search.src = "IMGS/search-black.png";
      });
      buttons.forEach((button) => {
        button.style.backgroundColor = "#ffffff";
        button.style.color = "#000000";
      });
      buttonSc.forEach((button) => {
        button.style.backgroundColor = "#ffffff";
        button.style.color = "#000000";
      });
      imgCalc.src = "IMGS/stone-black.png";
      imgCalc2.src = "IMGS/scissors-black.png";
      imgCalc3.src = "IMGS/paper-black.png";
      buttonCalc.forEach((button) => {
        button.style.backgroundColor = "#ffffff";
        button.style.color = "#000000";
      });
      gameboard.style.border = "2px solid #ffffff";
      pole.style.border = "2px solid #ffffff";
      buttonScientist.forEach((button) => {
        button.style.backgroundColor = "#ffffff";
        button.style.color = "#000000";
      });
      swiperSlide.forEach((swiper) => {
        swiper.style.backgroundColor = "#000000";
      });
      swiperNext.style.stroke = "#ffffff";
      swiperPrev.style.stroke = "#ffffff";
    } else if (isDarkMode === false) {
      document.body.style.backgroundColor = "#ffffff";
      document.body.style.color = "#000000";
      divmain.style.backgroundColor = "#ffffff";
      line.forEach((line) => {
        line.style.backgroundColor = "#000000";
      });
      divheader.style.backgroundColor = "#ffffff";
      divfooter.style.backgroundColor = "#ffffff";
      search.forEach((search) => {
        search.src = "IMGS/search.png";
      });
      buttons.forEach((button) => {
        button.style.backgroundColor = "#000000";
        button.style.color = "#ffffff";
      });
      buttonSc.forEach((button) => {
        button.style.backgroundColor = "#000000";
        button.style.color = "#ffffff";
      });
      imgCalc.src = "IMGS/stone.webp";
      imgCalc2.src = "IMGS/scissors.webp";
      imgCalc3.src = "IMGS/paper.webp";
      buttonCalc.forEach((button) => {
        button.style.backgroundColor = "#000000";
        button.style.color = "#ffffff";
      });
      gameboard.style.border = "2px solid #000000";
      pole.style.border = "2px solid #000000";
      buttonScientist.forEach((button) => {
        button.style.backgroundColor = "#000000";
        button.style.color = "#ffffff";
      });
      swiperSlide.forEach((swiper) => {
        swiper.style.backgroundColor = "#ffffff";
      });
      swiperNext.style.stroke = "#000000";
      swiperPrev.style.stroke = "#000000";
    }
    // const theme = isDarkMode ? "dark" : "light";
    // document.documentElement.setAttribute("data-theme", theme);
    // localStorage.setItem("theme", theme);
    // updateThemeIcon(isDarkMode);
  }
});
