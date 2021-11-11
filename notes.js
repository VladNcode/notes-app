const fs = require('fs');

const saveNotes = notes => {
  fs.writeFileSync('notes.json', JSON.stringify(notes));
};

const loadNotes = () => {
  try {
    return JSON.parse(fs.readFileSync('notes.json').toString());
  } catch (e) {
    return [];
  }
};

const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNotes = notes.filter(el => el.title === title);
  if (duplicateNotes.length > 0) return console.log('Note already exists!');

  notes.push({ title, body });
  saveNotes(notes);
  console.log('New note added!');
};

const removeNote = title => {
  const notes = loadNotes();
  const newNotes = notes.filter(el => el.title !== title);

  if (newNotes.length !== notes.length) {
    console.log('Note successfully removed!');
    return saveNotes(newNotes);
  }

  console.log('Note not found!');
};

const readNote = title => {
  const notes = loadNotes();
  const read = notes.filter(el => el.title === title);
  if (read.length > 0)
    return console.log(`Title: ${read[0].title}, Body: ${read[0].body}`);

  console.log('Note not found!');
};

const getNotesList = () => {
  const notes = loadNotes();
  const list = notes
    .reduce((acc, note) => acc + note.title + ', ', '')
    .slice(0, -2);
  if (list.length > 0) return console.log(`Available notes: ${list}`);
  console.log('There is no notes yet! Add a new one!');
};

module.exports = {
  getNotesList,
  addNote,
  removeNote,
  readNote,
};
