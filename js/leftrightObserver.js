const leftItems = document.querySelectorAll(".hidden-left");
const rightItems = document.querySelectorAll(".hidden-right");

const observerOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0.1,
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

leftItems.forEach((item) => observer.observe(item));
rightItems.forEach((item) => observer.observe(item));
