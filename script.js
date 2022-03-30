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
        //Add a bew card
        cardsContainer = document.querySelector('.cards-container')
        let newCard = document.createElement('div')
        newCard.className = 'card';
        newCard.setAttribute('id', i);
        cardsContainer.append(newCard)   
        
        //Add a inner information
        newRemoveButton = document.createElement('button')    
        newP = document.createElement('p')
        newToggle = document.createElement('button')
        newToggle.className = 'toggle'
        newCard.append(newToggle)
        newCard.append(newRemoveButton)

        //Set toggle button value as 'Not Readed' 
        newToggle.value = 'Not Readed'
        newToggle.innerText = newToggle.value

        //Toggle button If Else Statement
        newToggle.addEventListener('click', function toggleButton(){
           
            if (newToggle.value == 'Not Readed') {
            newToggle.value = 'Readed'
            newToggle.innerText = newToggle.value
            } else {
                newToggle.value = 'Not Readed'
                newToggle.innerText = newToggle.value
            }
        })

        //Remove button functionality
        newRemoveButton.addEventListener('click', function test(){
            newCard.classList.remove('card')
            newCard.remove();
            myLibrary.splice(i,1)


        })
        //Add info of the new added card
        newCard.append(newP)
        newP.append(myLibrary[i].title);
        newBr = document.createElement('br')
        newP.append(newBr)
        newP.append(myLibrary[i].author)

        console.log(i);
        // console.log(myLibrary[i].title);
        document.getElementById('name').value = '';
        document.getElementById('author').value = '';

        // Add readed status

        
        
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