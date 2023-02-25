<!DOCTYPE html>
<html>
<head>
  <title>Register Form</title>
</head>
<body>
  <h1>Register Form</h1>
  <form id="register-form" method="post">
    <div>
      <label for="username">Username:</label>
      <input type="text" id="username" name="username" required>
    </div>
    <div>
      <label for="password">Password:</label>
      <input type="password" id="password" name="password" required>
    </div>
    <div>
      <button type="submit">Register</button>
    </div>
  </form>
  <div id="result"></div>

  <script>
    const form = document.getElementById('register-form');
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
      const xhr = new XMLHttpRequest();
      xhr.open('POST', 'register.php');
      xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
      xhr.onload = function() {
        if (xhr.status === 200) {
          const response = JSON.parse(xhr.responseText);
          if (response.success) {
            document.getElementById('result').innerHTML = '<p>Registration successful!</p>';
          } else {
            document.getElementById('result').innerHTML = '<p>' + response.message + '</p>';
          }
        }
      };
      xhr.send('username=' + encodeURIComponent(username) + '&password=' + encodeURIComponent(password));
    });
  </script>
</body>
</html>
