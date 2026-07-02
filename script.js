const bodyEl = document.querySelector("body");
const mobileNavBtns = document.querySelectorAll(".mobile-nav");
const navEl = document.querySelector(".nav");
const navContentEl = document.querySelector(".nav-content");

// openNavBtn.addEventListener("click", () => {
//   navEl.classList.add("open-nav");
// });

mobileNavBtns.forEach((btn) => {
  btn.addEventListener("click", navToggler);
});

function navToggler() {
  if (navEl.classList.contains("open-nav")) {
    navEl.classList.remove("open-nav");
    bodyEl.style.overflow = "auto";
  } else {
    navEl.classList.add("open-nav");
    bodyEl.style.overflow = "hidden";
  }

  navContentEl.classList.contains("nav-content-open")
    ? navContentEl.classList.remove("nav-content-open")
    : navContentEl.classList.add("nav-content-open");
}
