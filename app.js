const yargs = require('yargs');
const chalk = require('chalk');
const notes = require('./notes');
const { argv } = require('yargs');

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
    a => console.log(`Title: ${a.title}, Body: ${a.body}`)
  )
  .command(
    'remove',
    'Remove a note!',
    { title: { describe: 'Note title' } },
    a => console.log('Removing a new note', a)
  )
  .command('read', 'Read a note!', { title: { describe: 'Note title' } }, a =>
    console.log('Reading a note', a)
  )
  .command(
    'list',
    'List your notes!',
    { title: { describe: 'Note title' } },
    a => console.log('Listing out all notes!', a)
  )
  .parse();

// console.log(argv);  Show current argv
// yargs.showHelp();   Show all commands
