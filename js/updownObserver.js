const items = document.querySelectorAll(".hidden");
const items2 = document.querySelectorAll(".hidden2");

const observer1 = new IntersectionObserver(
  (entries, observerInstance) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observerInstance.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.5 }
);

const observer2 = new IntersectionObserver(
  (entries, observerInstance) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observerInstance.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.5 }
);

items.forEach((item) => observer1.observe(item));
items2.forEach((item) => observer2.observe(item));
