const fs = require('fs')

const chalk = require('chalk')

const getNotes = () => {
    return "Your notes are great"
}

const addNote = (title, body)=>{
    const notes = loadNotes()

    const duplicateNotes = notes.filter((note)=> note.title === title
         
    )

    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
             body: body
       })
      
     saveNotes(notes)
     console.log(chalk.green.inverse("New Note Taken"))
    } else{
        console.log(chalk.red.inverse("Note Already Taken"))
    }

    
   
}

 const saveNotes = (notes)=>{
     const dataJSON = JSON.stringify(notes)
     fs.writeFileSync('notes.json', dataJSON)
 }

 const loadNotes = ()=>{
     try{
         const dataBuffer = fs.readFileSync('notes.json')
         const dataJSON = dataBuffer.toString()
         return JSON.parse(dataJSON)
     } catch(e){
         return []
     }

   
 }

 const removeNote = (title) => {
   const notes = loadNotes()

   const notesToKeep = notes.filter((note)=> note.title !== title)

   if (notes.length > notesToKeep.length) {
    console.log(chalk.red.inverse('Note Removed'))
    }else{
    console.log(chalk.green.inverse('Note Not Found'))
    }

   saveNotes(notesToKeep) 
  

 }

 const listNotes = () => {
    const notes = loadNotes()

    console.log("Your Notes")

     notes.forEach((note) => 
     {console.log(note.title)
     }   
         
    )
    
    
 }

 const readNote = (title) =>{
    const notes = loadNotes()

  
    const notesToRead = notes.find((note) => note.title === title )


        if (notesToRead) {
            console.log(chalk.green.inverse(notesToRead.title))
            console.log(notesToRead.body)
        } else {
            console.log(chalk.red.inverse('Note Not Found'))
        }

    

        
 }

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}