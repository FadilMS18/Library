// first initiate for the program
deleteBook()

// Function to change readStatus
function checkYesButton(){
    // This will select the card container
    let divParentClass = this.parentNode.parentNode.parentNode.classList

    
    if(this.classList.contains("confirm-read") && noButton.classList.contains("not-confirm")){
        return;
    }
    else if(this.classList.contains("not-confirm") && noButton.classList.contains("confirm-read")){
        this.classList.remove("not-confirm")
        noButton.classList.remove("confirm-read")
        divParentClass.remove("not-read")

        this.classList.add("confirm-read")
        noButton.classList.add("not-confirm")
        divParentClass.add("read") 

    }else return
    
}

function checkNoButton(){
    // this will select the card container
    let divParentClass = this.parentNode.parentNode.parentNode.classList

    if(this.classList.contains("confirm-read") && yesButton.classList.contains("not-confirm")){
        return;
    }
    else if(this.classList.contains("not-confirm") && yesButton.classList.contains("confirm-read")){
        this.classList.remove("not-confirm")
        yesButton.classList.remove("confirm-read")
        divParentClass.remove("read")

        this.classList.add("confirm-read")
        yesButton.classList.add("not-confirm")
        divParentClass.add("not-read")
        
    }else return
    
}

function deleteBook(){
    for(let i = 0; i < allDiv.length; i++ ){
        allDiv[i].removeEventListener("mouseover", divClickHandler)
        allDiv[i].addEventListener("mouseover", divClickHandler)
    }
}

function divClickHandler(){
    let remove = this.querySelector("#remove-book")

    yesButton = this.querySelector("p:last-of-type > :last-child > button:first-child")
    noButton = this.querySelector("p:last-of-type > :last-child > button:last-child")

    remove.removeEventListener("click", deleteSelect)
    remove.addEventListener("click", deleteSelect)

    yesButton.removeEventListener("click", checkYesButton)
    yesButton.addEventListener("click", checkYesButton)

    noButton.removeEventListener("click", checkNoButton)
    noButton.addEventListener("click", checkNoButton)
}

function deleteSelect(){
    setTimeout(()=>{
        this.parentNode.classList.add("noneDisplay")
        let index = allDiv.indexOf(this.parentNode)
        allDiv.splice(index, 1)
    })
    setTimeout(()=>{
        bookContainer.removeChild(this.parentNode)
    },200)
}

// event & function to delete all the book
const deleteAllBookButton = document.querySelector("#delete-button")
deleteAllBookButton.addEventListener("click", deleteAllBook)

function deleteAllBook(){
    allDiv.forEach((div)=>{
        setTimeout(()=>{
            div.classList.add("noneDisplay")
        },1)
        setTimeout(()=>{
            bookContainer.removeChild(div)
        },200)
        setTimeout(()=>{
            allDiv.splice(0, allDiv.length) // delete all div in array
        },1)
    })
}

// Add Style to navbar if the user scroll the page
const navbar = document.querySelector("nav#nav-container")
const scrollCollapse = 5
function handleScroll(){
    if(window.scrollY > scrollCollapse){
        setTimeout(()=>{
            navbar.classList.value = "stick"
        },1)
    }else{
        setTimeout(() => {
            navbar.classList.value = "absolute"    
        }, 1);
    }
}

window.addEventListener("scroll", handleScroll)



