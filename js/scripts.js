/*
 * AIAGENTSAGE Website Scripts
 *
 * Handles dynamic footer year and site interactions.
 */

document.addEventListener('DOMContentLoaded', () => {
  // Update footer year
  const yearSpan = document.getElementById('year');
  if (yearSpan) {
    const currentYear = new Date().getFullYear();
    yearSpan.textContent = currentYear;
  }

  // Make entire blog cards clickable
  document.querySelectorAll('.blog-card').forEach((card) => {
    const link = card.querySelector('.blog-card-title');
    if (link) {
      card.addEventListener('click', () => {
        window.location.href = link.getAttribute('href');
      });
    }
  });

  const navToggle = document.querySelector('.nav-toggle');
  const mainNav = document.querySelector('.main-nav');
  if (navToggle && mainNav) {
    navToggle.addEventListener('click', () => {
      const expanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', String(!expanded));
      mainNav.classList.toggle('open');
    });
  }
});