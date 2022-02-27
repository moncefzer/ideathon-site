let toggle_btn = document.querySelector(".toggle-nav");
let nav = document.querySelector(".navbar");

toggle_btn.addEventListener("click", () => {
  nav.classList.toggle("open");
});

let navlinks = document.querySelectorAll(".navlink");

for (let i = 0; i < navlinks.length; i++) {
  navlinks[i].addEventListener("click", () => {
    nav.classList.toggle("open");
  });
}
