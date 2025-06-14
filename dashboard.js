if (!localStorage.getItem('loggedInUser')) {
    window.location.href = 'login.html';
}

const noteForm = document.getElementById('noteForm');
const notesContainer = document.getElementById('notesContainer');
const userKey = localStorage.getItem('loggedInUser') + '_notes';

function renderNotes() {
    const notes = JSON.parse(localStorage.getItem(userKey)) || [];
    notesContainer.innerHTML = '';
    notes.forEach((note, index) => {
    const div = document.createElement('div');
    div.className = 'note';
    div.innerHTML = `
        <h3>${note.title}</h3>
        <p>${note.content}</p>
        <button onclick="deleteNote(${index})">Delete</button>
    `;
    notesContainer.appendChild(div);
    });
}

noteForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const title = document.getElementById('noteTitle').value;
    const content = document.getElementById('noteContent').value;

    const notes = JSON.parse(localStorage.getItem(userKey)) || [];
    notes.push({ title, content });
    localStorage.setItem(userKey, JSON.stringify(notes));
    noteForm.reset();
    renderNotes();
});

function deleteNote(index) {
    const notes = JSON.parse(localStorage.getItem(userKey)) || [];
    notes.splice(index, 1);
    localStorage.setItem(userKey, JSON.stringify(notes));
    renderNotes();
}

function logout() {
    localStorage.removeItem('loggedInUser');
    window.location.href = 'login.html';
}

renderNotes();
