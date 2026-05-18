// ─── Navbar scroll effect ───
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
});

// ─── Hamburger menu ───
const hamburger = document.getElementById('hamburger');
const navLinks  = document.querySelector('.nav-links');
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// ─── Scroll reveal ───
const reveals = document.querySelectorAll(
  '.problem-card, .feature-card, .step, .subject-pill, .stat-card, .solution-text, .solution-stats, .cta-inner'
);
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 80);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

reveals.forEach(el => {
  el.classList.add('reveal');
  observer.observe(el);
});

// ─── Waitlist form ───
function handleSubmit(e) {
  e.preventDefault();
  const name  = document.getElementById('wl-name').value.trim();
  const email = document.getElementById('wl-email').value.trim();
  if (!name || !email) return;

  // Save to localStorage as simple waitlist log
  const entry = { name, email, subject: document.getElementById('wl-subject').value, ts: new Date().toISOString() };
  const existing = JSON.parse(localStorage.getItem('ethute_waitlist') || '[]');
  existing.push(entry);
  localStorage.setItem('ethute_waitlist', JSON.stringify(existing));

  // Show success
  document.getElementById('waitlist-form').style.display = 'none';
  const successEl = document.getElementById('success-msg');
  document.getElementById('success-email').textContent = email;
  successEl.classList.add('show');
  successEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

// ─── Active nav link highlighting ───
const sections = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 120) current = section.id;
  });
  navAnchors.forEach(a => {
    a.style.color = a.getAttribute('href') === `#${current}` ? 'var(--blue-mid)' : '';
  });
});
