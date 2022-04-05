let myLibrary = [];

// Building the Class to replace the plain constructor
class Book {
    
    constructor(title, author, pages){
        this.title = title;
        this.author = author;
        this.pages = pages;
    }
    // Methods
     displayBooks(title, author, pages){
        title = document.getElementById('name').value
        author = document.getElementById('author').value;
        pages = document.getElementById('pages').value;
        let grade = document.getElementById('grade').value;
    
        // Push user values to array
        myLibrary.push(new Book(title, author, pages));
    
        for (let i = myLibrary.length - 1; i != myLibrary.length; i++) {
            //Add a bew card
            cardsContainer = document.querySelector('.cards-container')
            let newCard = document.createElement('div')
            newCard.className = 'card';
            newCard.setAttribute('id', i);
            cardsContainer.append(newCard)  
    
            // Add remove button
            newRemoveButton = document.createElement('button')
            newRemoveButton.className = 'remove-button'
            newCard.append(newRemoveButton)
            newRemoveButton.innerText = 'x'
            
            //Add text info of the new added card
            newBr = document.createElement('br') 
            p1 = document.createElement('p')
            p2 = document.createElement('p')
            p3 = document.createElement('p')
    
            newCard.append(p1)
            p1.append(myLibrary[i].title);
            
            newCard.append(p2)
    
            p2.append(myLibrary[i].author)
    
            newCard.append(p3)
    
            p3.append(myLibrary[i].pages)
    
            console.log(i);
            
            // Add toggle button
            newToggle = document.createElement('button')
            newToggle.className = 'toggle'
            newToggle.setAttribute('id', 'toggle' + i);
    
            newCard.append(newToggle)
            
            // Set toggle button value as 'Not Readed' 
            let toggleModify = document.getElementById('toggle' + i)
            toggleModify.value = 'Not Readed'
            toggleModify.innerText = toggleModify.value;
            toggleModify.style.backgroundColor = '#ff4d47'
    
            // Toggle button If Else Statement
            toggleModify.addEventListener('click', function toggleButton(){
               
                if (toggleModify.value == 'Not Readed') {
                    toggleModify.value = 'Readed'
                    toggleModify.style.backgroundColor = '#509c1e'
                    toggleModify.innerText = toggleModify.value
                } else {
                    toggleModify.value = 'Not Readed'
                    toggleModify.innerText = toggleModify.value
                    toggleModify.style.backgroundColor = '#ff4d47'
    
                }
            })
    
            // Remove button functionality
            newRemoveButton.addEventListener('click', function test(){
                newCard.classList.remove('card')
                newCard.remove();
                myLibrary.splice(i,1)
    
    
            })
    
            // console.log(myLibrary[i].title);
            document.getElementById('name').value = '';
            document.getElementById('author').value = '';
            document.getElementById('pages').value = '';
    
    
            // Add readed status
    
            
            
        }
    }
 
}

    let entryValues = new Book()
   // Submit entry button
   let entry = document.getElementById('entry');
   entry.addEventListener('click', displayBooks);
   
   // Submit entry by pressing 'enter'
   document.addEventListener('keypress', function(e){
       if (e.key === 'Enter') {
           displayBooks()
       }
   });

// This will be replaced for a Class
// function Book(title, author, pages){
//         this.title = title;
//         this.author = author;
//         this.pages = pages;
// }

    