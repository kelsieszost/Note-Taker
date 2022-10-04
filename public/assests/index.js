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
  
  // Hide an element
  const hide = (elem) => {
    elem.style.display = 'none';
  };