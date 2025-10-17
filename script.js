document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contactForm');
  const modal = new bootstrap.Modal(document.getElementById('confirmationModal'));

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      alert('Por favor ingresa un correo electrónico válido.');
      return;
    }

    // Simular envío
    modal.show();

    // Reset form
    form.reset();
  });

  // Smooth scroll para enlaces del navbar
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    });
  });
});

