
function verificaPalindromo() {
    const texto = document.querySelector(".campoTexto");

    let palavraFrase = texto.value;

    let arrayRevertido = palavraFrase.split("").reverse().join("");

    let algunsExemplos = document.getElementById("textoExemplo");
    let exemplo = document.createElement("span");

    algunsExemplos.innerHTML = "";

    algunsExemplos.appendChild(exemplo);

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

