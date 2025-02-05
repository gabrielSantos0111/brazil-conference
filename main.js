import { translates } from "./application/translates.js";

// ======== Hero countdown ========
const days = document.querySelectorAll(".days");
const hours = document.querySelectorAll(".hours");
const minutes = document.querySelectorAll(".minutes");

const countdown = new Date().getFullYear();

const countdownTime = new Date(`apri 12 ${countdown} 00:08:00`);

function updateCountdown() {
  const currentTime = new Date();
  const diff = countdownTime - currentTime;

  const d = Math.floor(diff / 1000 / 60 / 60 / 24);
  const h = Math.floor(diff / 1000 / 60 / 60) % 24;
  const m = Math.floor(diff / 1000 / 60) % 60;

  days.forEach((child) => {
    if (diff <= 0) {
      clearInterval(timer);
      child.innerHTML = "00";
      return;
    }
    child.innerHTML = d < 10 ? `0${d}` : d;
  });
  hours.forEach((child) => {
    if (diff <= 0) {
      clearInterval(timer);
      child.innerHTML = "00";
      return;
    }
    child.innerHTML = h < 10 ? `0${h}` : h;
  });
  minutes.forEach((child) => {
    if (diff <= 0) {
      clearInterval(timer);
      child.innerHTML = "00";
      return;
    }
    child.innerHTML = m < 10 ? `0${m}` : m;
  });
}

let timer = setInterval(updateCountdown, 1000);

// ======== Header ========

const storedLang = localStorage.getItem("lang");
if (storedLang === null) {
  localStorage.setItem("lang", navigator.language || navigator.userLanguage);
}

window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// ======== Translate ========

const translateButtons = document.querySelectorAll(".translate-button");

function setInitialLanguage() {
  const lang = localStorage.getItem("lang");
  document.documentElement.setAttribute("lang", lang);
  pageTranslate(lang);
}

function pageTranslate(lang) {
  const elementsToTranslate = document.querySelectorAll("[data-translate]");

  elementsToTranslate.forEach((element) => {
    const translateKey = element.getAttribute("data-translate");
    const translatedText = translates[lang][translateKey];

    if (translatedText) {
      const childElementsToKeep = element.querySelectorAll("[data-translate]");

      childElementsToKeep.forEach((child) => {
        const childTranslateKey = child.getAttribute("data-translate");
        const childTranslatedText = translates[lang][childTranslateKey];
        if (childTranslatedText) {
          child.textContent = childTranslatedText;
        }
      });

      const fragment = document.createDocumentFragment();
      childElementsToKeep.forEach((child) => {
        fragment.appendChild(child);
      });

      element.textContent = translatedText;

      if (translatedText.includes("%s")) {
        const combinedChildHTML = Array.from(childElementsToKeep)
          .map((child) => child.outerHTML)
          .join("");

        element.innerHTML = translatedText.replace("%s", combinedChildHTML);
      } else {
        element.appendChild(fragment);
      }

      if (element.tagName === "IMG") {
        element.alt = translates[lang][translateKey];
      }
    }
  });
}

translateButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const lang = button.getAttribute("data-lang");
    document.documentElement.setAttribute("lang", lang);
    localStorage.setItem("lang", lang);
    pageTranslate(lang);
  });
});
setInitialLanguage();

// ======== Modal ========

const openDialogButtons = document.querySelectorAll(".dialog-button");
const dialog = document.getElementById("dialog");
const dialogCloseBtn = dialog.querySelectorAll(".dialog-close");

openDialogButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // document.body.style.overflow = "hidden";
    // dialog.showModal();
  });
});

dialogCloseBtn.forEach((button) => {
  button.addEventListener("click", () => {
    // document.body.style.overflow = "auto";
    // dialog.close();
  });
});

// ======== Slider ========

function navigation(slider) {
  let wrapper, dots, arrowLeft, arrowRight;

  function markup(remove) {
    wrapperMarkup(remove);
    dotMarkup(remove);
    arrowMarkup(remove);
  }

  function removeElement(elment) {
    elment.parentNode.removeChild(elment);
  }

  function createDiv(className) {
    let div = document.createElement("div");
    let classNames = className.split(" ");
    classNames.forEach((name) => div.classList.add(name));
    return div;
  }

  function arrowMarkup(remove) {
    if (remove) {
      removeElement(arrowLeft);
      removeElement(arrowRight);
      return;
    }
    arrowLeft = document.querySelector(".arrow--left");
    arrowLeft.addEventListener("click", () => slider.prev());
    arrowRight = document.querySelector(".arrow--right");
    arrowRight.addEventListener("click", () => slider.next());

    wrapper.appendChild(arrowLeft);
    wrapper.appendChild(arrowRight);
  }

  function wrapperMarkup(remove) {
    if (remove) {
      let parent = wrapper.parentNode;
      while (wrapper.firstChild)
        parent.insertBefore(wrapper.firstChild, wrapper);
      removeElement(wrapper);
      return;
    }
    wrapper = createDiv("navigation-wrapper");
    slider.container.parentNode.appendChild(wrapper);
    wrapper.appendChild(slider.container);
  }

  function dotMarkup(remove) {
    if (remove) {
      removeElement(dots);
      return;
    }
    dots = createDiv("dots");
    slider.track.details.slides.forEach((_e, idx) => {
      let dot = createDiv("dot");
      dot.addEventListener("click", () => slider.moveToIdx(idx));
      dots.appendChild(dot);
    });
    wrapper.appendChild(dots);
  }

  function updateClasses() {
    let slide = slider.track.details.rel;
    slide === 0
      ? arrowLeft.classList.add("arrow--disabled")
      : arrowLeft.classList.remove("arrow--disabled");
    slide === slider.track.details.slides.length - 1
      ? arrowRight.classList.add("arrow--disabled")
      : arrowRight.classList.remove("arrow--disabled");
    Array.from(dots.children).forEach(function (dot, idx) {
      idx === slide
        ? dot.classList.add("dot--active")
        : dot.classList.remove("dot--active");
    });
  }

  slider.on("created", () => {
    markup();
    updateClasses();
  });
  slider.on("optionsChanged", () => {
    console.log(2);
    markup(true);
    markup();
    updateClasses();
  });
  slider.on("slideChanged", () => {
    updateClasses();
  });
  slider.on("destroyed", () => {
    markup(true);
  });
}

let slider = new KeenSlider(
  "#my-keen-slider",
  {
    breakpoints: {
      "(min-width: 720px)": {
        slides: { perView: 2, spacing: 5 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 3, spacing: 10 },
      },
    },
    slides: { perView: 1 },
  },
  [navigation]
);

let SingleSlider = new KeenSlider(
  "#social-slider",
  { slides: { perView: 1 } },
  [navigation]
);
