const nav = document.querySelector(".nav-menu");
const toggleBtn = document.querySelector(".nav-toggle");

const faqItems = document.querySelectorAll(".faq-item");

toggleBtn.addEventListener("click", () => {
  nav.classList.toggle("active");
});

faqItems.forEach((item) => {
  const icon = item.querySelector(".toggle-icon");

  item.addEventListener("click", () => {
    item.classList.toggle("active");

    if (item.classList.contains("active")) {
      icon.innerHTML = "-";
    } else {
      icon.innerHTML = "+";
    }
  });
});
