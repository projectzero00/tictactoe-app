function contar() {
    let numero = document.getElementById("numero").value
    let result = document.getElementById("result")


    if (numero === "") {
        alert("Digite um numero para realizar a tabuada")
    } else {
        result.innerHTML = ''
        for (let i = 0; i <= 10; i++) {
            let calculo = numero * i
            result.options[result.options.length] = new Option(`${numero} * ${i} = ${calculo} `);
        }
    }


}

