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

//Hamburger Menu Code
document.addEventListener('DOMContentLoaded', function () {
  const hamburgerIcon = document.getElementById('hamburger-icon');
  const mainNav = document.getElementById('main_nav');
  const headerR = document.getElementById('header_r');

  // Toggle the visibility of the navigation menu and header_r when the hamburger icon is clicked
  hamburgerIcon.addEventListener('click', function () {
    mainNav.style.display = (mainNav.style.display === 'none' || mainNav.style.display === '') ? 'block' : 'none';
    headerR.style.display = (headerR.style.display === 'none' || headerR.style.display === '') ? 'block' : 'none';
  });

  // Close the navigation menu when a menu item is clicked (optional)
  const navLinks = mainNav.getElementsByTagName('a');
  for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener('click', function () {
      mainNav.style.display = 'none';
      headerR.style.display = 'block'; // Show header_r when a menu item is clicked (optional)
    });
  }
});