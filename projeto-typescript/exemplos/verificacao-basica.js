let button = document.getElementById("button1");
let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");

function somarNumeros(numero1, numero2){
    return Number(numero1) + Number(numero2);
}

button.addEventListener("click", () => {
    console.log(somarNumeros(input1.value, input2.value))
})

console.log("Estou vinculado ao index.html");