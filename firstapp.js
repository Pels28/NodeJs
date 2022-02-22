const chalk = require('chalk')

const yargs = require('yargs')

const notes = require('./notes.js')


yargs.command({

    command: 'add',
    describe: 'add a note',
    builder:{
        title:{
            describe:'add a title',
            demandOption: true,
            type:'string'

        },
        body:{
             describe:'add a body',
             demandOption:true,
             type:'string'
         }
    },
    handler(argv){
      notes.addNote(argv.title, argv.body)
    }

})

yargs.command({

    command: 'list',
    describe: 'list a note',
    handler(argv){
        notes.listNotes()
    }

})

yargs.command({

    command: 'read',
    describe: 'read a note',
    builder:{
        title:{
            describe:'read note',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.readNote(argv.title)
    }

})

yargs.command({
    command: 'remove',
    describe: 'remove a note',
    builder: {
        title: {
            describe: 'remove title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
       notes.removeNote(argv.title)
        
    }

})

yargs.parse()






















// const pels = getNotes()

// console.log(pels)

// console.log(chalk.green("Success"))

// console.log(chalk.blue.bold("Alert"))

// console.log(chalk.red.bold.inverse("Error"))





// const fs = require('fs')

// //fs.writeFileSync('notes.txt', 'My name is Pels')

// fs.appendFileSync(' notes.txt', ' I am 20 years of age')