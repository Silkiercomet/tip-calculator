let error = document.querySelector(".error"),
percent = document.querySelector(".tip-buttons"),
amount = document.querySelector("#amount-bill"),
people = document.querySelector("#amount-people"),
tip = document.querySelector("#tip"),
total = document.querySelectorAll("#total"),
reset = document.querySelector("#reset"),
custom = document.querySelector("#custom");

const calc = (j,k,l) => {

    if(j > 0){
        total[0].textContent = j / l
        total[1].textContent = (j + parseFloat(k)) / l
    }else{
        total[0].textContent = '$0.00'
        total[1].textContent = '$0.00'
    }
}

const clear = () => {
    people.value = ""
    amount.value = ""
    total[0].textContent = '$0.00'
    total[1].textContent = '$0.00'
}

percent.addEventListener("click", p => {
    const key = p.target.value
    let tip__amount = (parseInt(key) * parseFloat(amount.value)) / 100, z = parseInt(people.value);
    
    if( people.value <= 0){
        error.style.visibility = 'visible'

    }else if(people.value > 0 || p.target.id == "custom"){
        error.style.visibility = 'hidden'
        calc(tip__amount,amount.value,z)
    }
    

    //x = parseFloat(amount.value), y = parseInt(people.value), ;

})


custom.addEventListener("keyup", e => {
    let tip__amount = (parseInt(e.target.value) * parseFloat(amount.value)) / 100, z = parseInt(people.value);
    if(e.target.value > 0 && e.target.value < 100){
        calc(tip__amount,amount.value,z)
    }else if(e.target.value < 0 || e.target.value >= 100 ){
        alert("invalid custom tip percent")
        clear()
    }

})

reset.addEventListener("click", clear)
