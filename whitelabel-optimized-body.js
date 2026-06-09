document.addEventListener('DOMContentLoaded', function() {
  // Style login form inputs
  const inputs = document.querySelectorAll('#Login input.form-control, #Login input[type="text"], #Login input[type="password"]');
  inputs.forEach(input => {
    input.style.color = '#1A1A2E';
    input.style.webkitTextFillColor = '#1A1A2E';
  });

  // Watch for dynamically added inputs
  const observer = new MutationObserver(function() {
    document.querySelectorAll('#Login input.form-control, #Login input[type="text"], #Login input[type="password"]').forEach(el => {
      if (!el.dataset.coloured) {
        el.style.color = '#1A1A2E';
        el.style.webkitTextFillColor = '#1A1A2E';
        el.dataset.coloured = '1';
      }
    });
  });
  observer.observe(document.body, {childList: true, subtree: true});

  // Language dropdown
  setTimeout(function() {
    const langLi = document.getElementById('language-hide');
    if (langLi) {
      langLi.style.overflow = 'visible';
      langLi.style.position = 'relative';

      const langBtn = langLi.querySelector('a');
      const langDrop = langLi.querySelector('ul');

      if (langDrop) {
        langDrop.style.display = 'none';
        langDrop.style.position = 'absolute';
        langDrop.style.right = '0';
        langDrop.style.top = '100%';
        langDrop.style.zIndex = '9999';
        langDrop.style.background = '#FFFFFF';
        langDrop.style.minWidth = '180px';
        langDrop.style.maxHeight = '367px';
        langDrop.style.overflowY = 'scroll';
        langDrop.style.boxShadow = '0 4px 20px rgba(123,47,190,0.15)';
        langDrop.style.borderRadius = '12px';
        langDrop.style.border = '1px solid #EDE8F8';
      }

      if (langBtn) {
        langBtn.addEventListener('click', function(e) {
          e.preventDefault();
          e.stopPropagation();
          if (langDrop) {
            langDrop.style.display = langDrop.style.display === 'block' ? 'none' : 'block';
          }
        });
      }

      document.addEventListener('click', function() {
        if (langDrop) {
          langDrop.style.display = 'none';
        }
      });
    }
  }, 500);

  // Enhance form submission
  const loginForm = document.querySelector('#Login form');
  if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
      const email = document.getElementById('identifier');
      if (email && email.value) {
        console.log('Login attempt with:', email.value.trim());
      }
    });
  }

  // Placeholder styling
  const style = document.createElement('style');
  style.textContent = `
    #Login input::placeholder { color: #9E8EC0 !important; opacity: 1 !important; }
    #Login input::-webkit-input-placeholder { color: #9E8EC0 !important; opacity: 1 !important; }
    #Login input:-moz-placeholder { color: #9E8EC0 !important; opacity: 1 !important; }
    #Login input::-moz-placeholder { color: #9E8EC0 !important; opacity: 1 !important; }
    #Login input:-ms-input-placeholder { color: #9E8EC0 !important; opacity: 1 !important; }
  `;
  document.head.appendChild(style);
});