function comparaNumeros(num1, num2){
    let soma = num1 + num2;
    let iguais = num1 === num2;
    let iguaisString = "";

    if(iguais){
      iguaisString = "são iguais";
    }else{
      iguaisString = "não são iguais";
    }

    if(soma<20){
        return `Os números ${num1} e ${num2} ${iguaisString} e sua respectiva soma é menor que 20.`;
    }else if(soma > 10){
        return `Os números ${num1} e ${num2} ${iguaisString} e sua respectiva soma é maior que 10.`;
    }else if(soma<20 && soma > 10){
        return `Os números ${num1} e ${num2} ${iguaisString} e sua respectiva soma é maior que 10 e menores que 20.`;
    }
}