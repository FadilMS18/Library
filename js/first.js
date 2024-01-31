const body = document.querySelector("body")

const myBook = []

class NewBook{
    constructor(a, b, c, d){
        this.title = a
        this.author = b
        this.pages = c
        this.readStatus = d
    }
}

function addBookToLibrary(a, b, c, d){
    let title = a.value
    let author = b.value
    let pages = c.value
    let read = d.checked ? true : false

    book = new NewBook(title, author, pages, read)
    myBook.push(book)
    addBook()   
}


const checkBox = document.querySelector(`input[type="checkbox"]`)

// Dialog Element
let dialog = document.querySelector("dialog")

// Form container inside the dialog
const formContainer = document.querySelector("div#form")

// Input Selector
const info = Array.from(formContainer.querySelectorAll("p > input"))

// P container for input & label
const infoContainer = Array.from(formContainer.querySelectorAll("p"))

// Label Selector excluding the checkbox
const label = []
infoContainer.forEach((but)=>{
    let bel = but.querySelector("label")
    label.push(bel)  
})
label.pop(label.length - 1)

// EventListener for every input
function checkInputValue(){
    for(let i = 0; i < 3; i++){
        info[i].addEventListener("focus", ()=>{
            label[i].classList.add("active")
            info[i].addEventListener("focusout", ()=>{
                if(info[i].value === ""){
                    label[i].classList.remove("active")
                }
            })
        })
    }    
}


// window event listener to activate the form
window.addEventListener("DOMContentLoaded", checkInputValue)


// Confirm form document
const confirm = formContainer.querySelector("button")

confirm.addEventListener("click", resetForm)

function resetForm(){
    if(checkValue()){
        alert("You Need to fill All the field")
        return
    }

    setTimeout(()=>{
        addBookToLibrary(info[0], info[1], info[2], info[3])
        info.forEach((input)=>{
            input.value = ""
            input.checked = false
            resetValue()
        })
    },1)
    dialog.close()
}



// Reset the title class
function resetValue(){
    
    for(let i = 0; i < 3; i++){
        if(info[i].value === ""){
            label[i].classList.remove("active")
        }
    }
}

// Check the required
function checkValue(){
    for(let i = 0; i < 3; i++){
        if(info[0].value === "" || info[1].value === "" || info[2].value === ""){
            return true  // If the input field is empty the object wont be push to the array
        }else{return false} // Else the function will proceed to run
    }
}


const addBookButton = document.querySelector("#add-button")

addBookButton.addEventListener("click", ()=>{
    setTimeout(()=>{
        document.querySelector("dialog").showModal()
    },1)
})

const bookContainer = document.querySelector("section#book-container")
const allDiv = Array.from(bookContainer.querySelectorAll("div")) ;

function addBook(){
        
    let div = document.createElement("div")
    bookContainer.appendChild(div)

    let span = document.createElement("span")
    span.setAttribute("id", "remove-book")
    div.appendChild(span)
    
    let heading = document.createElement("h5")
    heading.textContent = book.title
    div.appendChild(heading)
    

    for(let i = 0; i < 3; i++){
        let p = document.createElement("p")
        if(i === 0){
            p.textContent = book.author
            div.appendChild(p)
        }else if(i === 1){
            p.textContent = book.pages
            div.appendChild(p)
        }else if(i === 2){
            p.textContent = ""
            div.appendChild(p)
            for(let i = 0; i < 2; i++){
                let span = document.createElement("span")
                if(i === 0){
                    p.appendChild(span)
                    span.textContent = "Read Status : "
                }else if(i === 1){
                    for(let i = 0; i < 2; i++){
                        let button = document.createElement("button")
                        if(i === 0){
                            if(book.readStatus){
                                button.classList.add("yes", "confirm-read")
                                div.classList.add("read")
                            }else{
                                button.classList.add("yes", "not-confirm")
                            }
                            span.appendChild(button)   
                        }else if( i === 1 ){
                            if(!book.readStatus){
                                button.classList.add("no", "confirm-read")
                                div.classList.add("not-read")
                            }else{
                                button.classList.add("no", "not-confirm")
                            }
                            span.appendChild(button)
                        }    
                    }
                    p.appendChild(span)
                }

            }
        }
    }
    allDiv.push(div)
    setTimeout(()=>{
        deleteBook()
    },10)   
}


