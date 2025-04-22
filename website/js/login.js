function login() {
    const username = document.getElementById('username').value.trim();
    const currentUser = localStorage.getItem('currentUser');
  
    if (currentUser) {
      alert(`You're already logged in as ${currentUser}. Please log out first.`);
      return;
    }
  
    if (username) {
      localStorage.setItem('currentUser', username);
      updateWelcome();
    }
  }
  
  function logout() {
    localStorage.removeItem('currentUser');
    document.getElementById('username').value = ''; // Clear input field
    updateWelcome();
  }
  
  function updateWelcome() {
    const welcomeMessage = document.getElementById('welcomeMessage');
    const user = localStorage.getItem('currentUser');
    if (user) {
      welcomeMessage.innerText = `Welcome, ${user}!`;
    } else {
      welcomeMessage.innerText = '';
    }
  }
  
  window.onload = updateWelcome;
  