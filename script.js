// FAQ SCRIPT
document.addEventListener("DOMContentLoaded", () => {
  const faqRows = document.querySelectorAll(".faq-row");

  faqRows.forEach((row) => {
    const qRow = row.querySelector(".q-row");
    const toggleAnswer = row.querySelector(".toggle-answer img");

    qRow.addEventListener("click", () => {
      faqRows.forEach((r) => {
        const tAnswer = r.querySelector(".toggle-answer img");
        if (r !== row) {
          r.classList.remove("active");
          tAnswer.src = "./assets/show.svg";
        }
      });

      row.classList.toggle("active");
      toggleAnswer.src = row.classList.contains("active")
        ? "./assets/hide.svg"
        : "./assets/show.svg";
    });
  });
});

// Toggle menu

let isOpen = false;
const toggleBtn = document.querySelector(".toggle-menu-button ion-icon");
const menu = document.querySelector(".mobile-nav-container");
const links = document.querySelectorAll(".mobile-nav a");

toggleBtn.addEventListener("click", function (e) {
  if (!isOpen) {
    isOpen = !isOpen;
    menu.classList.add("show-menu");
    e.target.name = "close-outline";
  } else {
    isOpen = !isOpen;
    menu.classList.remove("show-menu");
    e.target.name = "menu-outline";
  }
});

links.forEach((link) => {
  link.addEventListener("click", function () {
    isOpen = false;
    menu.classList.remove("show-menu");
    toggleBtn.name = "menu-outline";
  });
});

// Sticky header

document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector("header");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 0) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  });
});

// Scroll to top

let mybutton = document.getElementById("scrollToTopBtn");
let targetSection = document.querySelector(".hero-container");

let observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        mybutton.style.display = "block";
      } else {
        mybutton.style.display = "none";
      }
    });
  },
  { threshold: 0.1 }
);

observer.observe(targetSection);

mybutton.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
