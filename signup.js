document.getElementById('signupForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;

let users = JSON.parse(localStorage.getItem('users')) || [];
if (users.find(u => u.email === email)) {
    alert('User already exists!');
    return;
    }

users.push({ email, password });
localStorage.setItem('users', JSON.stringify(users));
alert('Sign up successful!');
window.location.href = 'login.html';
});