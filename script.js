(() => {
  'use strict';
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
  const button = document.getElementById('menuToggle');
  const nav = document.getElementById('links');
  if (!button || !nav) return;
  const dropdowns = [...nav.querySelectorAll('.nav-dropdown')];
  function closeMenu() {
    nav.classList.remove('open');
    button.setAttribute('aria-expanded', 'false');
    button.setAttribute('aria-label', 'Apri menu');
  }
  button.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    button.setAttribute('aria-expanded', String(isOpen));
    button.setAttribute('aria-label', isOpen ? 'Chiudi menu' : 'Apri menu');
    if (!isOpen) dropdowns.forEach(x => x.open = false);
  });
  dropdowns.forEach(details => details.addEventListener('toggle', () => {
    if (details.open) dropdowns.filter(x => x !== details).forEach(x => x.open = false);
  }));
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    closeMenu();
    dropdowns.forEach(x => x.open = false);
  }));
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      dropdowns.forEach(x => x.open = false);
      closeMenu();
    }
  });
  document.addEventListener('click', e => {
    if (!e.target.closest('.header')) {
      dropdowns.forEach(x => x.open = false);
      closeMenu();
    }
  });
})();
