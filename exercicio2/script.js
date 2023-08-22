function idade(){
    var idade = document.getElementById("input-age").value;
    var msg = document.getElementById("p-msg");
    var subIdade = 2023 - idade;
    if(idade > 2022 || idade <= 1922){
        alert("Insira uma idade valida")
    }else if(document.getElementById("radio-masc").checked){
        msg.innerText = `Detectamos um homem com ${subIdade} anos.`
    } else if(document.getElementById("radio-fem").checked) {
        msg.innerText = `Detectamos uma mulher com ${subIdade} anos.`
    }
}