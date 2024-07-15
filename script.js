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
