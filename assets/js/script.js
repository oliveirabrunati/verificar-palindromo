// pegar o texto digitado pelo usuaria

let texto = document.querySelector(".campoTexto");

function verificaPalindromo() {

    let palavraFrase = texto.value;

    let arrayRevertido = palavraFrase.split("").reverse().join("");

    console.log(arrayRevertido);

    if (palavraFrase != arrayRevertido) {
        return console.log("Não é um palíndromo.");
    } else {
        return console.log("É um palíndromo");
    }

}

verificaPalindromo();
