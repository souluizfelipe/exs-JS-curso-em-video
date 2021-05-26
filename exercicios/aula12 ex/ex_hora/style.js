function carregarSite(){
    var msg = document.getElementById("msg")
    var img = document.getElementById("foto")
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    msg.innerHTML = `Agora são ${hora}:${minutos}`
    
    

    if (hora >= 6 && hora <= 12) {
        // bom dia
        img.src = 'img/manha.png'
        document.body.style.background = '#aabec7'
    } else if (hora >= 12 && hora < 18) {
        // boa tarde
        img.src = 'img/tarde.png'
        document.body.style.background = "#a6875b"
    } else {
        // boa noite
        img.src = 'img/noite.png'
        document.body.style.background = '#02303d'
    }
}