// pegar o texto digitado pelo usuaria

let texto = document.querySelector(".campoTexto");

function verificaPalindromo() {

    let palavraFrase = texto.value;

    let arrayRevertido = palavraFrase.split("").reverse().join("");

    let algunsExemplos = document.getElementById("textoExemplo");
    let exemplo = document.createElement("span");
    // let palindromo = document.createTextNode(" ");

    algunsExemplos.innerHTML = "";

    algunsExemplos.appendChild(exemplo);
    // exemplo.appendChild(palindromo);

    if(palavraFrase !== ""){
        console.log(typeof(palavraFrase));
        if (palavraFrase === arrayRevertido) {
    
            let palindromo = document.createTextNode("É um palíndromo.");
    
            exemplo.appendChild(palindromo);
        } else {
            let epalindromo = document.createTextNode("Não é um palíndromo.");
    
            exemplo.appendChild(epalindromo);
        }
    }

    

}


