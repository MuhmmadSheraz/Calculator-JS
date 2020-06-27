//Show Value TO Screen
let showNumb = (value) => {

    document.getElementById('calDisplay').innerHTML += value
}

//Clear All Value from Screen
let clearAll = () => {
    document.getElementById('calDisplay').innerHTML = "";

}

// Backspace Button

let del = () => {
        let value = document.getElementById("calDisplay")
        let a = value.innerHTML.toString()
        let deletedValue = a.slice(0, -1)
        value.innerHTML = deletedValue
    }
    // Calcluate Expression
let equal = () => {
    let expression = document.getElementById('calDisplay')
    let result = eval(expression.innerHTML)

    expression.innerHTML = result
}