const tabsButtons = document.querySelectorAll(".tab-link");

const tabs = document.querySelectorAll(".tab-content");
const arrows = document.querySelector(".tabs-arrow-svg");
const dolar = document.querySelector(".tabs-dolar-svg");
const blueBall = document.querySelector(".blue-ball");

tabs[0].style.display = "flex";

function openCity(cityName) {
  tabs.forEach((tab) => {
    tab.style.display = "none";
  });
  let i;
  let x = document.getElementsByClassName("city");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  const element = document.getElementById(cityName);
  element.style.display = "flex";
}

tabsButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const tabName = button.getAttribute("data-value");

    tabsButtons.forEach((btn) => btn.classList.remove("active-tab"));
    button.classList.add("active-tab");

    switch (tabName) {
      case "hack-brazil":
        arrows.setAttribute("style", "transform: translateX(25%)");
        dolar.setAttribute("style", "transform: translateX(150%)");
        blueBall.setAttribute("style", "transform: translateY(100%)");
        break;
      case "researchers-award":
        arrows.setAttribute(
          "style",
          "transform: translateX(25%) translateY(-40%) rotate(-45deg)"
        );
        dolar.setAttribute("style", "transform: translateX(251%)");
        blueBall.setAttribute("style", "transform: translateY(-30%)");
        break;
      case "serving-brazil":
        arrows.setAttribute(
          "style",
          "transform: translateX(0) translateY(30%)"
        );
        dolar.setAttribute("style", "transform: translateX(150%)");
        blueBall.setAttribute("style", "transform: translateY(100%)");
        break;
      case "culture-in-action":
        arrows.setAttribute(
          "style",
          "transform: translateX(0) translatey(-50%) rotate(-90deg)"
        );
        dolar.setAttribute("style", "transform: translateX(0)");
        blueBall.setAttribute("style", "transform: translateY(70%)");
        break;
      case "ai4good":
        arrows.setAttribute(
          "style",
          "transform: translateX(0) translateY(-80%) rotate(-90deg)"
        );
        dolar.setAttribute("style", "transform: translateX(150%)");
        blueBall.setAttribute("style", "transform: translateY(-30%)");
        break;
      default:
        arrows.setAttribute("style", "transform: translateX(0)");
        dolar.setAttribute("style", "transform: translateX(0)");
        blueBall.setAttribute("style", "transform: translateY(0)");
    }

    openCity(tabName);
  });
});
