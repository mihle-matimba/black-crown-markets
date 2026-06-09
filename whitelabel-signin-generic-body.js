document.addEventListener('DOMContentLoaded', function() {
  // Style form inputs
  const inputs = document.querySelectorAll('input.form-control, input[type="email"], input[type="password"], input[type="text"], select.form-control, textarea.form-control');
  inputs.forEach(input => {
    input.style.color = '#1a1a1a';
    input.style.webkitTextFillColor = '#1a1a1a';
  });

  // Watch for dynamically added inputs
  const observer = new MutationObserver(function() {
    document.querySelectorAll('input.form-control, input[type="email"], input[type="password"], input[type="text"], select.form-control, textarea.form-control').forEach(el => {
      if (!el.dataset.coloured) {
        el.style.color = '#1a1a1a';
        el.style.webkitTextFillColor = '#1a1a1a';
        el.dataset.coloured = '1';
      }
    });
  });
  observer.observe(document.body, {childList: true, subtree: true});

  // Enhance form submissions
  const forms = document.querySelectorAll('form');
  forms.forEach(form => {
    form.addEventListener('submit', function(e) {
      const emailInput = form.querySelector('input[type="email"]');
      if (emailInput && emailInput.value) {
        console.log('Form submitted with email:', emailInput.value);
      }
    });
  });

  // Handle Google Sign In if button exists
  const googleBtn = document.querySelector('.google-btn');
  if (googleBtn) {
    googleBtn.addEventListener('click', function(e) {
      e.preventDefault();
      console.log('Google sign-in clicked');
      // Add your Google OAuth handler here
    });
  }

  // Placeholder color fix for webkit browsers
  const style = document.createElement('style');
  style.textContent = `
    input::placeholder { color: #999 !important; opacity: 1 !important; }
    input::-webkit-input-placeholder { color: #999 !important; opacity: 1 !important; }
    input:-moz-placeholder { color: #999 !important; opacity: 1 !important; }
    input::-moz-placeholder { color: #999 !important; opacity: 1 !important; }
    input:-ms-input-placeholder { color: #999 !important; opacity: 1 !important; }
  `;
  document.head.appendChild(style);
});
