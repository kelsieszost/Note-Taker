let title;
let text;
let newNoteBtn;
let saveNoteBtn;
let list;

if (window.location.pathname === '/notes') {
  noteTitle = document.querySelector('.title');
  noteText = document.querySelector('.note_textarea');
  saveNoteBtn = document.querySelector('.save_note');
  newNoteBtn = document.querySelector('.new_note');
  noteList = document.querySelectorAll('.list_container .list_group');
}

const show = (elem) => {
    elem.style.display = 'inline';
  };
  
  const hide = (elem) => {
    elem.style.display = 'none';
  };

  let newNote = {};

const getNotes = () =>
  fetch('/api/notes', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const saveNote = (note) =>
  fetch('/api/notes', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(note),
  });

  const deleteNote = (id) =>
  fetch(`/api/notes/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });