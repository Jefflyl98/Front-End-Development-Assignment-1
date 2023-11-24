// Function for Contact Form
function showPopupForm() { //Opens popup contact form
    document.getElementById("popup-form-container").style.display = "block";
  }
  
  function hidePopupForm() { //Closes popup contact form
    document.getElementById("popup-form-container").style.display = "none";
  }
  
  document.addEventListener("DOMContentLoaded", () => { //When click on run function showPopupForm()
    document.getElementById('show-popup').addEventListener('click', () => {
      showPopupForm();
    });
  
    document.addEventListener('keydown', (event) => { //Press ESC on keyboard to run function hidePopupForm()
      if (event.key === 'Escape') hidePopupForm()
    });

    document.getElementById('close-popup').addEventListener('click', () => { //Click on close button to run function hidePopupForm()
      hidePopupForm();
    });
  });
  
  document.getElementById("contact-form").addEventListener("submit", (event) => {
    //When submit button clicked on run validation
    const contactForm = event.target;
    if (!validateContactForm(contactForm)) {
      event.preventDefault();
      displayError(contactForm, 'Invalid input');
    }
  });
  //Checks Valid Email
  function isValidEmail(email) {
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    return emailRegex.test(email);
  }
  //Checks Phone Number
  function isValidPhoneNumber(phone) {
    const phoneRegex = /^\d{8,}$/;
    return phoneRegex.test(phone);
  }
  //Checks all informatio is correct
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
