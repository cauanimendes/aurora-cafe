
document.addEventListener("DOMContentLoaded", () => {
  // Atualiza o ano no rodapé
  const yearElement = document.getElementById("year");

  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // Seleciona os elementos que serão animados
  const elements = document.querySelectorAll(
    ".hero-text, .hero-image, .about-content, .product-card, .contact .container"
  );

  // Respeita a preferência de movimento reduzido
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return;
  }

  // Caso o navegador não suporte IntersectionObserver
  if (!("IntersectionObserver" in window)) {
    return;
  }

  elements.forEach((element) => {
    element.classList.add("reveal");
  });

  // Observa quando os elementos entram na tela
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1
    }
  );

  elements.forEach((element) => {
    observer.observe(element);
  });
});
