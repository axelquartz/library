let myLibrary = [];

function Book(title){
        this.title = title;
}

// function passBook(title){
//    myLibrary.push(new Book(title)) ;

//     // myLibrary.push(title)
//     console.log(myLibrary[i].title);
// }

function displayBooks(title){
    title = prompt('Write a Book Name')
    myLibrary.push(new Book(title));
    for (let i = myLibrary.length - 1; i != myLibrary.length; i++) {
        cardsContainer = document.querySelector('.cards-container')
        let newCard = document.createElement('div')
        newCard.className = 'card'
        cardsContainer.append(newCard)

        
        newP = document.createElement('p')
        newCard.append(newP)
        newP.append(myLibrary[i].title);
        console.log(i);
        // console.log(myLibrary[i].title);
        
        
        
         
        
    }
}

let testButton = document.querySelector('#test-button');
testButton.addEventListener('click', displayBooks)


