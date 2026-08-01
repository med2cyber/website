const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.site-nav');

navToggle?.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

document.querySelectorAll('.site-nav a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    navToggle?.setAttribute('aria-expanded', 'false');
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));

document.getElementById('year').textContent = new Date().getFullYear();

document.getElementById('contact-form')?.addEventListener('submit', (event) => {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const name = `${form.get('firstName')} ${form.get('lastName')}`.trim();
  const organization = form.get('organization') || 'Not provided';
  const email = form.get('email');
  const message = form.get('message');
  const subject = encodeURIComponent(`Consultation request from ${name}`);
  const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nOrganization: ${organization}\n\nProject details:\n${message}`);
  window.location.href = `mailto:info@med2cyber.com?subject=${subject}&body=${body}`;
});
