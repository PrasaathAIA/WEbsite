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
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', async (event) => {
      event.preventDefault();

      const statusEl = document.getElementById('formStatus');
      if (statusEl) {
        statusEl.textContent = 'Sending...';
        statusEl.className = 'form-status';
      }

      const formData = {
        name: contactForm.name.value,
        email: contactForm.email.value,
        message: contactForm.message.value,
      };

      try {
        const response = await fetch(contactForm.action, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          if (statusEl) {
            statusEl.textContent = 'Message sent successfully!';
            statusEl.classList.add('success');
          }
          contactForm.reset();
        } else {
          throw new Error('Network response was not ok');
        }
      } catch (error) {
        if (statusEl) {
          statusEl.textContent = 'There was an error sending your message.';
          statusEl.classList.add('error');
        }
        console.error('Error submitting form:', error);
      }
    });
  }
  const navToggle = document.querySelector('.nav-toggle');
  const header = document.querySelector('.main-header');
  if (navToggle && header) {
    navToggle.addEventListener('click', () => {
      const expanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', String(!expanded));
      header.classList.toggle('nav-open');
    });
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
});
