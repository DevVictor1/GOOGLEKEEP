document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

const users = JSON.parse(localStorage.getItem('users')) || [];
const user = users.find(u => u.email === email && u.password === password);

if (user) {
    localStorage.setItem('loggedInUser', email);
    window.location.href = 'dashboard.html';
    } else {
    alert('Invalid login credentials');
    }
});