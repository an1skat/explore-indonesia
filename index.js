// Swiper
const swiper = new Swiper(".swiper", {
  loop: true,
  slidesPerView: 1,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    1420: {
      slidesPerView: 3,
      spaceBetween: 31,
    },
  },
});

// Show more func
const paragraphs = document.querySelectorAll(".tips-list-text");

paragraphs.forEach((textEl) => {
  const btn = textEl.nextElementSibling;

  if (
    !btn ||
    !btn.classList.contains("show-more") ||
    window.getComputedStyle(btn).display === "none"
  )
    return;

  const fullText = textEl.textContent.trim();
  const words = fullText.split(/\s+/);

  if (words.length > 4) {
    const shortText = words.slice(0, 4).join(" ");
    textEl.textContent = shortText;
    textEl.classList.add("shortened");

    btn.addEventListener("click", () => {
      textEl.textContent = fullText;
      textEl.classList.remove("shortened");
      btn.remove();
    });
  }
});

// Scroll to top btn
const scrollBtn = document.getElementById("scrollToTopBtn");

scrollBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
