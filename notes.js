const fs = require('fs');
const chalk = require('chalk');

const saveNotes = notes =>
  fs.writeFileSync('notes.json', JSON.stringify(notes));

const loadNotes = () => {
  try {
    return JSON.parse(fs.readFileSync('notes.json').toString());
  } catch (e) {
    return [];
  }
};

const addNote = (title, body) => {
  const notes = loadNotes();
  const singDupl = notes.find(el => el.title === title);
  if (singDupl) return console.log(chalk.bgRed('Note title taken!'));

  notes.push({ title, body });
  saveNotes(notes);
  console.log(chalk.bgGreen('New note added!'));
};

const updateNote = (title, newTitle, newBody) => {
  const notes = loadNotes();
  const read = notes.find(el => el.title === title);
  if (!read) return console.log(chalk.bgRed('Note not found!'));

  notes.map(el =>
    el.title === title ? ((el.title = newTitle), (el.body = newBody)) : el
  );
  saveNotes(notes);
  console.log(chalk.bgGreen('Note successfully updated!'));
};

const removeNote = title => {
  const notes = loadNotes();
  const newNotes = notes.filter(el => el.title !== title);

  if (!(newNotes.length < notes.length)) {
    return console.log(chalk.bgRed('Note not found!'));
  }

  console.log(chalk.bgGreen('Note successfully removed!'));
  saveNotes(newNotes);
};

const readNote = title => {
  const notes = loadNotes();
  const read = notes.find(el => el.title === title);

  if (!read) {
    return console.log(chalk.bgRed('Note not found!'));
  }

  console.log(
    `
${chalk.bgGreen('Here is your note:')}
${chalk.bgYellowBright(`Title: ${read.title}`)}
${chalk.bgCyanBright(`Body: ${read.body}`)}
`
  );
};

const getNotesList = () => {
  const notes = loadNotes();
  const list = notes
    .reduce((acc, note) => acc + note.title + ', ', '')
    .slice(0, -2);

  if (!(list.length > 0))
    return console.log(
      chalk.bgRed('There is no notes yet! Go ahead and add a new one!')
    );

  console.log(chalk.bgGreen('Available notes:'), list);
};

module.exports = {
  getNotesList,
  addNote,
  removeNote,
  readNote,
  updateNote,
};
