let counter = 0

const value = document.querySelector("#value")
const button = document.querySelectorAll(".btn")

button.forEach((button)=>{
    button.addEventListener("click", function(e){
       const eachBtn = e.currentTarget.classList
        if( eachBtn.contains("decrease")){
            counter += -1
        }
        if(eachBtn.contains("increase")){
            counter+= 1
        }
        if(eachBtn.contains("reset")){
            counter = 0
        }
        value.textContent = counter
    })
})
