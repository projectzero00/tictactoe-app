function addSelect() {
    let inputNum = document.getElementById("addNum").value;
    let select = document.getElementById("select");
    let pFinish = document.getElementById("pfinish");

    for (let i = 0; i < select.options.length; i++) {
        if (select.options[i].value === inputNum) {
            alert("Esse numero já existe");
            return;
        }
    }

    if (inputNum <= 0 || inputNum > 100) {
        alert("Por favor, adicione um numero valido");
    } else {
        select.options[select.options.length] = new Option(`${inputNum}`);
        pFinish.innerHTML = "";
    }
}

function terminar() {
    const pfinish = document.getElementById("pfinish");
    const select = document.getElementById("select");
    let maiorNum = -Infinity;
    let menorNum = Infinity;
    let soma = 0;

    for (let i = 0; i < select.options.length; i++) {
        const pNum = parseInt(select.options[i].value);

        if (pNum > maiorNum) {
            maiorNum = pNum;
        }
        if (pNum < menorNum) {
            menorNum = pNum;
        }

        soma += pNum;
    }

    const media = soma / 2;

    pfinish.innerHTML = 
    `Ao todo temos ${select.options.length} números cadastrados </br>
    O maior valor informado foi ${maiorNum}</br>
    O menor valor informado foi ${menorNum}</br>
    A soma de todos valores foi ${soma}</br>
    A média de todos valores é ${media}`;
}

