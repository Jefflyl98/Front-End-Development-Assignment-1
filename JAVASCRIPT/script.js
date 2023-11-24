function showPopupForm() {
    document.getElementById("popup-form-container").style.display = "block";
  }
  
  function hidePopupForm() {
    document.getElementById("popup-form-container").style.display = "none";
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    document.getElementById('show-popup').addEventListener('click', () => {
      showPopupForm();
    });
  
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') hidePopupForm()
    });
  });
  
  document.getElementById("contact-form").addEventListener("submit", (event) => {
    const contactForm = event.target;
    if (!validateContactForm(contactForm)) {
      event.preventDefault();
      displayError(contactForm, 'Invalid input');
    }
  });
  
  function isValidEmail(email) {
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    return emailRegex.test(email);
  }
  
  function isValidPhoneNumber(phone) {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone);
  }
  
  function validateContactForm(contactForm) {
    const name = contactForm["name"].value;
    const email = contactForm["email"].value;
    const phone = contactForm["phone"].value;
    const message = contactForm["message"].value;
  
    if (!name || !email || !message) {
      return false;
    }
  
    if (!isValidEmail(email) || (phone && !isValidPhoneNumber(phone))) {
      return false;
    }
  
    return true;
  }
  
  function displayError(formElement, message) {
    const errorElement = formElement.getElementsByClassName("form-error")[0];
    errorElement.innerHTML = message;
    errorElement.style.display = "block";
  }
  
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById('show-popup').addEventListener('click', () => {
    showPopupForm();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') hidePopupForm();
  });

  document.getElementById('close-popup').addEventListener('click', () => {
    hidePopupForm();
  });
});
