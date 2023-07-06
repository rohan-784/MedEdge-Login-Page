document.getElementById('loginBtn').addEventListener('click', function(event) {
  event.preventDefault();
  document.getElementById('loginPopup').style.display = 'block';
});

document.querySelectorAll('.closeBtn').forEach(function(btn) {
  btn.addEventListener('click', function() {
    document.querySelectorAll('.popup').forEach(function(popup) {
      popup.style.display = 'none';
    });
  });
});

document.querySelectorAll('.loginTypeBtn').forEach(function(btn) {
  btn.addEventListener('click', function() {
    document.getElementById('loginPopup').style.display = 'none';
    document.getElementById('loginPage').style.display = 'block';
  });
});

document.getElementById('registerLink').addEventListener('click', function(event) {
  event.preventDefault();
  document.getElementById('loginPage').style.display = 'none';
  document.getElementById('registerPage').style.display = 'block';
});

document.getElementById('loginLink').addEventListener('click', function(event) {
  event.preventDefault();
  document.getElementById('registerPage').style.display = 'none';
  document.getElementById('loginPage').style.display = 'block';
});

// Hide loginPopup and loginPage on page load
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('loginPopup').style.display = 'none';
  document.getElementById('loginPage').style.display = 'none';
  document.getElementById('registerPage').style.display = 'none';
  document.getElementById('logoutConfirmation').style.display = 'none';
});

// Close all popups when clicking on the background
document.body.addEventListener('click', function(event) {
  // Check if the click occurred on the background (not on any popup window)
  if (event.target === document.body) {
    document.querySelectorAll('.popup').forEach(function(popup) {
      popup.style.display = 'none';
    });
  }
});



///////// Validation of the website/////////////


// Add event listener to the register form submission
document.getElementById('registerForm').addEventListener('submit', function(event) {
  event.preventDefault();

  // Validate username
  var username = document.getElementById('registerUsername').value.trim();
  if (username === '') {
    alert('Please enter a proper username.');
    return;
  }

  // Clear input fields
  document.getElementById('registerUsername').value = '';
  document.getElementById('registerEmail').value = '';
  document.getElementById('registerPassword').value = '';
  // Close the registerPage popup
  document.getElementById('registerPage').style.display = 'none';
  // Show success message
  alert('Registered successfully');
  // Display the loginPopup page automatically
  document.getElementById('loginPopup').style.display = 'block';

});

// Add event listener to the login form submission
document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  // Change the text of the login button to "Logout"
  document.getElementById('loginBtn').textContent = 'Logout';
  document.getElementById('loginPage').style.display = 'none';

  document.getElementById('loginEmail').value = '';
  document.getElementById('loginPassword').value = '';

});

document.getElementById('loginBtn').addEventListener('click', function(event) {
  event.preventDefault();
  if (this.textContent === 'Logout') {
    if (confirm('Do you want to logout?')) {
      this.textContent = 'Login';
      document.querySelectorAll('.popup').forEach(function(popup) {
        popup.style.display = 'none';
      });
    }
  } else {
    document.getElementById('loginPopup').style.display = 'block';
  }
});
