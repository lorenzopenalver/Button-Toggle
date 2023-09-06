const btn = document.querySelector("button")
const monthlySuscription = document.querySelector(".month-suscription")
const anualSuscription = document.querySelector(".anual-suscription")
const buttonDiv = document.querySelector(".button-container")

buttonDiv.addEventListener("click",turnOn )


function turnOn() {
    if (monthlySuscription.classList.contains("inactive")){
        monthlySuscription.classList.remove("inactive")
        buttonDiv.classList.add("on")
        buttonDiv.classList.remove("off")
        anualSuscription.classList.add("inactive")

    }else if( anualSuscription.classList.contains("inactive")){
        anualSuscription.classList.remove("inactive")
        buttonDiv.classList.remove("on")
        buttonDiv.classList.add("off")
        monthlySuscription.classList.add("inactive")
    }
    
}
