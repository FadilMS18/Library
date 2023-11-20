




function checkYesButton(){
    if(this.classList.contains("not-confirm") && noButton.classList.contains("not-confirm")){
        this.classList.remove("not-confirm")
        this.classList.add("confirm-read")
        return  
    }

    if(this.classList.contains("confirm-read") && noButton.classList.contains("not-confirm")){
        this.classList.remove("confirm-read")
        this.classList.add("not-confirm")
        return
    }

    if(noButton.classList.contains("confirm-read") && this.classList.contains("not-confirm")){
        noButton.classList.remove("confirm-read")
        this.classList.remove("not-confirm")
        this.classList.add("confirm-read")
        noButton.classList.add("not-confirm")
        return
    }
}

function checkNoButton(){
    
    if(this.classList.contains("not-confirm") && yesButton.classList.contains("not-confirm")){
        this.classList.remove("not-confirm")
        this.classList.add("confirm-read")
        return;
        
    }

    if(this.classList.contains("confirm-read") && yesButton.classList.contains("not-confirm")){
        this.classList.remove("confirm-read")
        this.classList.add("not-confirm")
        return;
    }

    if(yesButton.classList.contains("confirm-read") && this.classList.contains("not-confirm")){
        yesButton.classList.remove("confirm-read")
        this.classList.remove("not-confirm")
        this.classList.add("confirm-read")
        yesButton.classList.add("not-confirm")
        return
    }
}


function deleteBuku(){
    for(let i = 0; i < allDiv.length; i++ ){
        allDiv[i].removeEventListener("mouseover", divClickHandler)
        allDiv[i].addEventListener("mouseover", divClickHandler)
    }
}

function divClickHandler(){
    let remove = this.querySelector("#remove-book")

    let yesButton = this.querySelector("p:last-of-type > :last-child > button:first-child")
    let noButton = this.querySelector("p:last-of-type > :last-child > button:last-child")

    remove.removeEventListener("click", consoler)
    remove.addEventListener("click", consoler)

    yesButton.removeEventListener("click", checkYesButton)
    yesButton.addEventListener("click", checkYesButton)

    noButton.removeEventListener("click", checkNoButton)
    noButton.addEventListener("click", checkNoButton)
}



function consoler(){
    setTimeout(()=>{
        this.parentNode.classList.add("noneDisplay")
    })
    setTimeout(()=>{
        bookContainer.removeChild(this.parentNode)
    },200)
}


deleteBuku()