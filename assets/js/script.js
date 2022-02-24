let toggle_btn = document.querySelector(".toggle-nav");
let nav = document.querySelector(".navbar");

toggle_btn.addEventListener("click", () => {
  nav.classList.toggle("open");
});
