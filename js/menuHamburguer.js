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

// Mobile submenu toggle para "Serviços" sin cerrar el hamburguer
(function () {
  const mq = window.matchMedia('(max-width: 768px)');
  const dropdowns = document.querySelectorAll('.menu-dropdown');

  dropdowns.forEach(dd => {
    const trigger = dd.querySelector(':scope > a');      // link "Serviços"
    const submenu = dd.querySelector(':scope > .submenu');

    // Asegura estado inicial
    dd.classList.remove('open');
    if (submenu) submenu.style.display = '';

    trigger.addEventListener('click', (e) => {
      if (mq.matches) {
        e.preventDefault();              // no navegar a servicos.html en mobile
        e.stopPropagation();             // no propagar al contenedor del menú
        // Alterna solo este dropdown, no cierra el menú
        dd.classList.toggle('open');
      }
      // En desktop, deja el comportamiento hover por CSS
    });
  });

  // Evita que clics dentro del submenu cierren el menú hamburguer
  document.querySelectorAll('.submenu a').forEach(a => {
    a.addEventListener('click', (e) => {
      // aquí sí permitimos la navegación normalmente
      // no hacemos nada especial, solo evitamos que otros listeners cierren el menú
      e.stopPropagation();
    });
  });
})();