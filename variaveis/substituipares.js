function substituirPares(array){
    for(let i = 0; i < ArrayBuffer.length; i++ ){
        if(array[i] === 0){
            return console.log("Você já é zero!!");
        }else if (array[i] % 2 === 0){
            console.log(`Substituindo ${array[i]}`)
            array[i] = 0;
        }
    }

    return array;
}