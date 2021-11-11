const yargs = require('yargs');
const notes = require('./notes');

yargs
  .command(
    'add',
    'Add a new note!',
    {
      title: {
        describe: 'Your note title',
        demandOption: true,
        type: 'string',
      },
      body: {
        describe: 'Your note text',
        demandOption: true,
        type: 'string',
      },
    },
    a => notes.addNote(a.title, a.body)
  )
  .command(
    'update',
    'Update a note!',
    {
      title: {
        describe: 'Your note title',
        demandOption: true,
        type: 'string',
      },
      newTitle: {
        describe: 'Your new title',
        demandOption: true,
        type: 'string',
      },
      newBody: {
        describe: 'Your new text',
        demandOption: true,
        type: 'string',
      },
    },
    a => notes.updateNote(a.title, a.newTitle, a.newBody)
  )
  .command(
    'remove',
    'Remove a note!',
    { title: { describe: 'Note title', demandOption: true, type: 'string' } },
    a => notes.removeNote(a.title)
  )
  .command(
    'read',
    'Read a note!',
    { title: { describe: 'Note title', demandOption: true, type: 'string' } },
    a => notes.readNote(a.title)
  )
  .command('list', 'List your notes!', () => notes.getNotesList())
  .parse();

// console.log(yargs.argv);  Show current argv
// yargs.showHelp();         Show all commands
