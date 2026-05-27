// ─── NAV SCROLL ───
const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
});

// ─── MOBILE HAMBURGER ───
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  const spans = hamburger.querySelectorAll('span');
  navLinks.classList.contains('open')
    ? (spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)',
       spans[1].style.opacity = '0',
       spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)')
    : (spans[0].style.transform = '',
       spans[1].style.opacity = '',
       spans[2].style.transform = '');
});

// ─── PAGE ROUTING ───
function navigate(pageId) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const target = document.getElementById(pageId);
  if (target) {
    target.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'instant' });
  }
  // Close mobile nav
  navLinks.classList.remove('open');
  // Update active nav link
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.classList.toggle('active-link', a.dataset.page === pageId);
  });
}

document.querySelectorAll('[data-page]').forEach(el => {
  el.addEventListener('click', (e) => {
    e.preventDefault();
    navigate(el.dataset.page);
  });
});

// ─── ACCORDION ───
document.querySelectorAll('.accordion-header').forEach(header => {
  header.addEventListener('click', () => {
    const item = header.parentElement;
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.accordion-item').forEach(i => i.classList.remove('open'));
    if (!isOpen) item.classList.add('open');
  });
});

// ─── CONTACT FORM ───
const form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    form.style.display = 'none';
    document.getElementById('form-success').style.display = 'block';
  });
}

// ─── COUNTER ANIMATION ───
function animateCounters() {
  document.querySelectorAll('.stat-number[data-target]').forEach(el => {
    const target = parseInt(el.dataset.target);
    const suffix = el.dataset.suffix || '';
    let current = 0;
    const increment = target / 60;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        el.textContent = target + suffix;
        clearInterval(timer);
      } else {
        el.textContent = Math.floor(current) + suffix;
      }
    }, 25);
  });
}

// Run counters after a brief delay on load
setTimeout(animateCounters, 600);
