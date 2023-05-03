let myLibrary=[];
// console.log(myLibrary)

Book.counter=1;

function Book(title,author,pages,status,id)
{
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.status=status;
    this.id=Book.counter++;
}




function addBookToLibrary(title,author,pages,status)
{
    const myBook=new Book(title,author,pages,status);
    
    myLibrary.push(myBook)

    // console.log(myLibrary);
}

// addBookToLibrary("Harry Potter","J.K. ROWLING",295,"Not Read Yet");
// addBookToLibrary("ThunderStorm","Harri Puttar",29500," Read ");
// addBookToLibrary("War and Love","Leo Tolstoy",895," Read ");
// addBookToLibrary("Invisible Man","Ralph Elissson",789," Not Read Yet ");
// addBookToLibrary("A Tale of Two Cities","Charles Dickens",1000," Read ");
// addBookToLibrary("Mystic Force","Dunkin Josh",9647," Read ");



// console.log(myLibrary)

const bookDiv=document.querySelector(".book-list");
const formSubmitBtn=document.querySelector("#formSubmit");
const myForm=document.querySelector("#my_form");



formSubmitBtn.addEventListener('click',function(e)
{
     
    e.preventDefault();





    
    //Removing Duplication of DIV while submitting form

    const removeDiv=document.querySelectorAll(".book-list-ul");
    for(let i=0;i<removeDiv.length;i++){
        removeDiv[i].remove();
    }






    let booksAuthor=document.getElementById("bookAuthor").value;
    let booksTitle=document.getElementById("bookTitle").value;
    let booksPages=document.getElementById("bookPages").value;
    let booksStatus=document.getElementById("bookStatus");
   

    var status=document.getElementsByName('bookStatus');
    for(i=0;i<status.length;i++)
    {
        if(status[i].checked){
            booksStatus=status[i].value;
        }
    }

    

    if(booksAuthor=="" || booksTitle=="" || booksPages=="" || booksStatus=="")
    {
        
        location.reload();
    }
    
        addBookToLibrary(booksTitle,booksAuthor,booksPages,booksStatus)
        console.log(myLibrary)

   

   


    
  

myLibrary.forEach((book)=>{
    

    const bookListul=document.createElement("ul");
    const bookListli=document.createElement("li");

    const bookTitle=document.createElement("p");
    const bookAuthor=document.createElement("p");
    const bookPages=document.createElement("p");
    const bookStatus=document.createElement("p");






    /////STATUS TOGGLE BUTTON LOGIC
    const modifyBtn=document.createElement("button");
    modifyBtn.innerHTML=`Modify Book Status`;
    modifyBtn.classList.add("modifyBtn");
    modifyBtn.setAttribute("data-index",book.id)

    modifyBtn.addEventListener("click",toggleReadStatus)

    Book.prototype=Object.create(Book.prototype);
    let toggleBook=new Book(booksTitle,booksAuthor,booksPages,booksStatus);
    console.log(toggleBook)
            
// Add a method to toggle the read status of the book
Book.prototype.toggleReadStatus = function() {
     this.status = !this.status;

    
  }
   

    function toggleReadStatus()
     {
       
        

            toggleBook.toggleReadStatus();
        

       

        

       
    }
//

    

   




    
    //DELETE BUTTON LOGIC 
    const deleteBtn=document.createElement("button");
    deleteBtn.textContent=`Delete Book`;
    
    deleteBtn.classList.add("deleteBtn");
    
     deleteBtn.setAttribute("data-index",book.id);
    
     deleteBtn.addEventListener('click',handleDelete)
     
   function handleDelete(event)
   {
    
    let id=Number(event.target.getAttribute("data-index"));
    console.log(id);

    const index=myLibrary.findIndex((book)=>book.id===id)
    console.log(index);
    

    if (index !== -1) {
        myLibrary.splice(index, 1);
        bookDiv.removeChild(event.target.parentNode.parentNode);
        
   }

   }
        
        

    
   ////DISPLAYING ELEMENTS ON SCREEN

    bookTitle.innerHTML=`<span class="title">Book Title:-</span> <span class="para"> ${book.title} </span>`
    bookAuthor.innerHTML=`<span class="title">Book Author:-</span>  <span class="para"> ${book.author} </span>`
    bookPages.innerHTML=`<span class="title">Book Pages:-</span>   <span class="para"> ${book.pages}  </span> `
    bookStatus.innerHTML=`<span class="title">Book Status:-</span>  <span class="para"> ${book.status}  </span>`

    console.log(bookStatus)


    bookListli.appendChild(bookTitle);
    bookListli.appendChild(bookAuthor);
    bookListli.appendChild(bookPages);
    bookListli.appendChild(bookStatus);
    bookListli.append(modifyBtn);
    bookListli.append(deleteBtn);
    
   
    bookListul.classList.add("book-list-ul");
    bookListli.classList.add("book-list-li");
    
    

    bookListul.append(bookListli);
    

    bookDiv.appendChild(bookListul);

   


    

});
myForm.reset();
})
