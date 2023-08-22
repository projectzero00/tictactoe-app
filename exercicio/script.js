function carregar() {
    var msg = document.getElementById("msg");
    var imagem = document.getElementById("imagem")
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`

    if(hora >= 0 && hora <= 12){
        imagem.src = 'img/photomanha.png'
        document.body.style.background = '#F7CEC5'
    } else if (hora >= 13 && hora <= 18){
        imagem.src = 'img/phototarde.png'
        document.body.style.background = '#FFB600'
    } else {
        imagem.src = 'img/photonoite.png'
        document.body.style.background = '#0558A2'
    }

}

