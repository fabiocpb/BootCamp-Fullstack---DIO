(function(){
    return console.log("Função executada com sucesso!");
})();

function sum(x, y, z){
    return x + y + z;
}

const numbers = [1, 2, 3];

console.log(sum(...numbers));

let nome = "Nicolas";

for(let i = 0; i < nome.length ; i++ ){
    //nome.charAt(i) = nome.charAt(i+1);
    console.log(nome.charAt(i));
}

let pessoa1 = {
    nome: "Ted",
    sobrenome: "Doe",
    cidade: "Cincinatti"
}

const fulano = {cicrano: function (pessoa){
    return this.nome + this.sobrenome + this.cidade;
}
};

console.log(fulano.cicrano.call(pessoa1));


