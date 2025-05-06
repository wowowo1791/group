window.onload = showWelcome;

function login() {
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value;


  const loggedInUser = localStorage.getItem('currentUser');
  if (loggedInUser) {
    alert(`You're already logged in as ${loggedInUser}. Please log out first.`);
    return;
  }

  if (!username || !password) {
    alert("Please enter both username and password.");
    return;
  }

  localStorage.setItem('currentUser', username);
  localStorage.setItem(`password_${username}`, password);

  alert(`Welcome, ${username}! Redirecting to the Home page...`);
  showWelcome();
  window.location.href = 'index.html'; 
}

function logout() {
  const username = localStorage.getItem('currentUser');

  if (username) {
    alert(`${username} has been logged out.`);
    localStorage.removeItem('currentUser');
    localStorage.removeItem(`password_${username}`);
  }


  document.getElementById('username').value = '';
  document.getElementById('password').value = '';
  showWelcome();
}

function showWelcome() {
  const user = localStorage.getItem('currentUser');
  const message = document.getElementById('welcomeMessage');

  if (user) {
    message.innerText = `Welcome, ${user}!`;
    document.getElementById('username').value = user;
  } else {
    message.innerText = '';
  }
}
