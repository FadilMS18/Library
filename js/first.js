
const button = document.querySelector("button")

button.addEventListener("click",()=>{
    
})

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

const formContainer = document.querySelector("div#form")
const info = Array.from(formContainer.querySelectorAll("input"))

const confirm = formContainer.querySelector("button")

const labelInput = Array.from(document.querySelectorAll(`#form > p > label:not([for="readStatus"])`))

info.forEach((input)=>{
    input.addEventListener("focus", ()=>{
        setTimeout(()=>{
            labelInput.forEach((lab)=>{
                lab.classList.add("active")
            })
        },1)
        
    })
})

confirm.addEventListener("click", ()=>{
    setTimeout(()=>{
        addBookToLibrary(info[0], info[1], info[2], info[3])
        info.forEach((input)=>{
            input.value = ""
            input.checked = false
        })
        console.log(myBook)
    },1)
})

