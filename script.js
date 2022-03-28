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
    myLibrary.push(new Book(title)) ;
    for (let i = 0; i < myLibrary.length; i++) {
        console.log(myLibrary[i].title);
        
    }
}

