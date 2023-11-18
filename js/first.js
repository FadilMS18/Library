const body = document.querySelector("body")

const myBook = []


function newBook(a, b, c, d){
    this.title = a
    this.author = b
    this.pages = c
    this.readStatus = d
}

function addBookToLibrary(a, b, c, d){
    let title = a.value
    let author = b.value
    let pages = c.value
    c.checked ? read = "yes, i have" : read="No, i haven't"

    let book = new newBook(title, author, pages, read)
    myBook.push(book)
}



const checkBox = document.querySelector(`input[type="checkbox"]`)

// Form container(absolute layer), not the fixed layer
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
label.pop(label.length-1)

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
        console.log(myBook)
    },1)

    setTimeout(()=>{
        fixedContainer.classList.add("none")
    },1)
    
}

// Fixed container for the form
const fixedContainer = document.querySelector("div#container-form")


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


const addBookButton = document.querySelector("header#header > section > #desc > div > :first-child")

addBookButton.addEventListener("click", ()=>{
    setTimeout(()=>{
        fixedContainer.classList.remove("none")
    },1)
})