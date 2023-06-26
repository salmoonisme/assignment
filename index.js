// check email function
function isValidEmail(input) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(input);
  }
  
  document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
  
    var emailInput = document.getElementById('email');
    var emailValue = emailInput.value.trim();
  
    if (isValidEmail(emailValue)) {
      alert('Email is valid');
      document.getElementById('form').submit();
    } else {
      alert('Invalid email format');
    }
  });

// toggle menu dropdown
const navBar = document.querySelector('.navbar-nav');
document.querySelector('#menu').onclick = () => {
  navBar.classList.toggle('active');
}

// deactivate toggle menu dropdown
const menu = document.querySelector('#menu');
document.addEventListener('click', function(e){
  if(!menu.contains(e.target) && !navBar.contains(e.target)) {
    navBar.classList.remove('active');
  }
})

