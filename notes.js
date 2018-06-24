//#!/usr/bin/env node;
const obj = require('./commands/commands.js');
const argv = require('yargs')
    .usage('Usage: $0 <cmd> --title [string] --body [string]')
    .example('node notes.js add --title \'title add new\' --body \'body add new\'')
    .example('node notes.js add -t \'title add new\' -b \'body add new\'')
    .example('node notes.js <cmd> --title=\'Title of a note\' --body=\'Body of a note\'')
    .alias('t', 'title').nargs('t', 1).describe('t', 'Title of a note')
    .alias('b', 'body').nargs('b', 1).describe('b', 'Body of a note')
    .help('h').alias('h', 'help')
    .epilog('Created by Dzmitry Karneyenka')
    .demandCommand(1, 'You need enter one command before moving on')
    .command(['add', 'a']/*command's name*/, 'add a new note'/*description of the command*/, (yargs) => {
        yargs.options('t', { demand: true, desc: 'Title of a note' })
        yargs.options('b', { demand: true, desc: 'Body of a note' })
    }/*I can't imaging*/, function (argv) {
        console.log(obj.add(argv.title, argv.body));
    })
    .command(['list', 'ls'], 'show all notes', (yargs) => { }, () => {
        console.log(obj.list());
    })
    .command(['remove', 'rm'], 'remove a note by title', (yargs) => {
        yargs.options('t', { demand: true, desc: 'Title of a note' })
    }, argv => {
        console.log(obj.remove(argv.title));
    })
    .command(['read', 'r'], 'read a note by title', (yargs) => {
        yargs.options('t', { demand: true, desc: 'Title of a note' })
    }, argv => {
        console.log(obj.read(argv.title));
    })
    .command(['clear', 'clr'], 'show all notes', (yargs) => { }, () => {
        console.log(obj.clear());
    })
    .argv;

