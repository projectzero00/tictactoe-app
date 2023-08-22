function contar() {
    let inicio = Number(document.getElementById("numInicio").value)
    let fim = Number(document.getElementById("numFim").value)
    let passo = Number(document.getElementById("numPass").value)
    let result = document.getElementById("result")



    for (let i = inicio; i <= fim; i += passo) {
        result.innerHTML += `${i} ->`
    }

}

