let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');
const indicators = document.querySelectorAll('.indicator');

function switchSlide(index) {
  if (slides.length === 0) return;
  slides[currentSlide].classList.remove('active');
  indicators[currentSlide].classList.remove('active');

  currentSlide = index;

  slides[currentSlide].classList.add('active');
  indicators[currentSlide].classList.add('active');
}

// Auto-rotate slides
const slideInterval = setInterval(() => {
  if (slides.length > 0) {
    switchSlide((currentSlide + 1) % slides.length);
  }
}, 5000);

function handleGoogleSignIn() {
  alert('Google sign-in integration coming soon');
}

const signInForm = document.getElementById('signInForm');
if (signInForm) {
  signInForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    alert(`Signed in with email: ${email}`);
  });
}

// Hide left section on mobile
function updateLayout() {
  const leftSection = document.querySelector('.left-section');
  if (leftSection) {
    if (window.innerWidth < 1024) {
      leftSection.classList.remove('visible');
    } else {
      leftSection.classList.add('visible');
    }
  }
}

updateLayout();
window.addEventListener('resize', updateLayout);

// Enhance form inputs with whitelabel styling
document.addEventListener('DOMContentLoaded', function() {
  const inputs = document.querySelectorAll('input.form-control, input[type="email"], input[type="password"]');
  inputs.forEach(input => {
    input.style.color = '#1a1a1a';
    input.style.webkitTextFillColor = '#1a1a1a';
  });
});