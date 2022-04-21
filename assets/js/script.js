// pegar o texto digitado pelo usuaria

let texto = document.querySelector(".campoTexto");

function verificaPalindromo() {

    let palavraFrase = texto.value;

    let arrayRevertido = palavraFrase.split("").reverse().join("");

    // console.log(arrayRevertido);

    let algunsExemplos = document.getElementById("textoExemplo");
    let exemplo = document.createElement("span");
    let palindromo = document.createTextNode(" ");

    algunsExemplos.appendChild(exemplo);
    exemplo.appendChild(palindromo);

    if (palavraFrase !== arrayRevertido) {

        let palindromo = document.createTextNode("Não é um palíndromo.");

        exemplo.appendChild(palindromo);

    } else (palavraFrase === arrayRevertido)
        let epalindromo = document.createTextNode("É um palíndromo.");

    exemplo.appendChild(epalindromo);
    // return console.log("É um palíndromo.");



}

verificaPalindromo();


