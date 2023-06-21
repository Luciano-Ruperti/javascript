function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    msg.innerHTML = `Agora são ${hora} horas e ${minutos} minutos.`
    if (hora >= 0 && hora < 12) {
        img.src = 'imagens/dia.png';
        document.body.style.background = '#f7c625'
    } else if (hora >= 12 && hora <18) {
        img.src = 'imagens/tarde.png';
    } else if (hora > 18 && hora < 24) {
        img.src = 'imagens/noite.png';
        document.body.style.background = '#0a0b2b';
    }
}


