// js/menuHamburguer.js
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".menu-toggle");
  const menu = document.querySelector(".menu");
  if (!toggle || !menu) return;

  // Atributos ARIA
  if (!menu.id) menu.id = "menu-principal";
  toggle.setAttribute("aria-controls", menu.id);
  toggle.setAttribute("aria-expanded", "false");

  const openMenu = (open) => {
    menu.classList.toggle("open", open);
    toggle.setAttribute("aria-expanded", String(open));
    document.body.style.overflow = open ? "hidden" : "";
  };

  toggle.addEventListener("click", () => {
    const isOpen = menu.classList.contains("open");
    openMenu(!isOpen);
  });

  // Cerrar con Escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") openMenu(false);
  });

  // Cerrar al hacer click en un enlace del menú (mobile UX)
  menu.addEventListener("click", (e) => {
    if (e.target.matches("a")) openMenu(false);
  });
});