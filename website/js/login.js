function login() {
  const username = document.getElementById('username').value.trim();
  const currentUser = localStorage.getItem('currentUser');

  if (currentUser) {
    alert(`You're already logged in as ${currentUser}. Please log out first.`);
    return;
  }

  if (username) {
    localStorage.setItem('currentUser', username);
    alert(`Welcome, ${username}! Redirecting to the Home page...`);
    updateWelcome();
    window.location.href = 'index.html'; 
  } else {
    alert("Please enter a username.");
  }
}

function logout() {
  const user = localStorage.getItem('currentUser');
  if (user) {
    alert(`${user} has been logged out.`);
    localStorage.removeItem('currentUser');
  }

  document.getElementById('username').value = '';
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
