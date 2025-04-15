document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the form from submitting

  // Get the values from the input fields
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Simple validation (just checking if fields are not empty)
  if (username && password) {
      document.getElementById('message').innerText = 'Login successfully!';
  } else {
      document.getElementById('message').innerText = 'Please enter both username and password.';
      document.getElementById('message').style.color = 'red';
  }
});

