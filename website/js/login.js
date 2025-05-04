function login() {
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value;

  const currentUser = localStorage.getItem('currentUser');

  if (currentUser) {
    alert(`You're already logged in as ${currentUser}. Please log out first.`);
    return;
  }

  if (username && password) {
    localStorage.setItem('currentUser', username);
    localStorage.setItem(`password_${username}`, password); 
    alert(`Welcome, ${username}! Redirecting to the Home page...`);
    updateWelcome();
    window.location.href = 'index.html';
  } else {
    alert("Please enter both username and password.");
  }
}

function logout() {
  const user = localStorage.getItem('currentUser');
  if (user) {
    alert(`${user} has been logged out.`);
    localStorage.removeItem('currentUser');
    localStorage.removeItem(`password_${user}`); 
  }

  document.getElementById('username').value = '';
  document.getElementById('password').value = '';
  updateWelcome();
}

function updateWelcome() {
  const welcomeMessage = document.getElementById('welcomeMessage');
  const user = localStorage.getItem('currentUser');

  if (user) {
    welcomeMessage.innerText = `Welcome, ${user}!`;
    document.getElementById('username').value = user;
  } else {
    welcomeMessage.innerText = '';
    document.getElementById('username').value = '';
  }
}

window.onload = updateWelcome;
