let myLibrary = [];

function Book(title, author){
        this.title = title;
        this.author = author;
}

function displayBooks(title, author){
    title = document.getElementById('name').value
    author = document.getElementById('author').value;
    // let grade = document.getElementById('grade').value;

    myLibrary.push(new Book(title, author));
    

    for (let i = myLibrary.length - 1; i != myLibrary.length; i++) {
        cardsContainer = document.querySelector('.cards-container')
        let newCard = document.createElement('div')
        newCard.className = 'card';
        newCard.setAttribute('id', i);
        cardsContainer.append(newCard)    
        newRemoveButton = document.createElement('button')    
        newP = document.createElement('p')
        newCard.append(newRemoveButton)

        newRemoveButton.addEventListener('click', function test(){
            alert(myLibrary[i].title)
        })

        newCard.append(newP)
        newP.append(myLibrary[i].title);
        newBr = document.createElement('br')
        newP.append(newBr)
        newP.append(myLibrary[i].author)

        console.log(i);
        // console.log(myLibrary[i].title);
        document.getElementById('name').value = '';
        document.getElementById('author').value = '';

        
        
    }
}

let entry = document.getElementById('entry');
entry.addEventListener('click', displayBooks);

// let row = 1;

// function displayDetails(){
    
//     let name = document.getElementById('name').value;
//     let age = document.getElementById('age').value;
//     let grade = document.getElementById('grade').value;

//     alert(name + age + grade)
// }