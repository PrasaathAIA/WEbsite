/*
 * AIAGENTSAGE Website Scripts
 *
 * Handles contact form submission (client-side) and dynamic footer year.
 */

document.addEventListener('DOMContentLoaded', () => {
  // Update footer year
  const yearSpan = document.getElementById('year');
  if (yearSpan) {
    const currentYear = new Date().getFullYear();
    yearSpan.textContent = currentYear;
  }

  // Contact form submission handler
  // No custom JavaScript is required for the contact form because it relies on
  // the mailto action to open the user’s default email client.
});