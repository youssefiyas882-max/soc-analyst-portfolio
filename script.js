document.getElementById("year").textContent = new Date().getFullYear();

const reveal = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
      reveal.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });

document.querySelectorAll(".feature-card, .skill-card, .tool, .step").forEach((el) => {
  el.style.opacity = "0";
  el.style.transform = "translateY(12px)";
  el.style.transition = "opacity .5s ease, transform .5s ease, border-color .2s ease";
  reveal.observe(el);
});
