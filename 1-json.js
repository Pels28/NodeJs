const fs = require('fs')

const book = {
    name:"Andrew",
    planet:"Earth",
    age:27
}

const stringedBook = JSON.stringify(book)

//const bookJSON = fs.writeFileSync('1-json.json', stringedBook)

const parsedBook = JSON.parse(stringedBook)
parsedBook.name="Pels"
parsedBook.age=20

const updatedStringedBook = JSON.stringify(parsedBook)

fs.writeFileSync('1-json.json', updatedStringedBook)

