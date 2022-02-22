// const square = function(x){
//     return x * x
// }

// const square = (x) => {
//     return x * x
// }

// const square = (x) => x * x

const events = {
    name: 'Birthday Party',
    guessList: ['Pels', 'Mary', 'Ababio'],
    printGuessList(){
        console.log('Guess List for ' + this.name)

        

        this.guessList.forEach((guest) => {
            console.log(guest +" is attending " + this.name)
        })

    } 
}

events.printGuessList()