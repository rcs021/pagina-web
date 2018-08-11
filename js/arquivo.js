function enviar() {
     
    var nome = document.getElementById("txt-nome");
    
    if (nome.value !== "") {
        
        alert("Obrigado " + nome.value + ", mas está em desenvolvimento");
    }
    else {
        alert("Obrigado, mas esta área está em desenvolvimento")
    }
}