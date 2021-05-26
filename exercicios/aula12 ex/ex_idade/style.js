function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('anotxt')
    var resultado = document.querySelector('div#resultado')
   
    if (fAno.value.length == 0 || fAno.value > ano) {
        alert ('erro, verifique os dados adicionados')
    } else {
        var fSex = document.getElementsByName('inpsex')
        var idade = ano - fAno.value
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fSex[0].checked) {
            genero = 'homem'
            if(idade >= 0 && idade <= 10) {
                img.setAttribute('src', 'img/m-crianca.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'img/m-jovem.png')
            } else if (idade < 50){
                img.setAttribute('src', 'img/m-adulto.png') 
            } else {
                img.setAttribute('src', 'img/m-idoso.png') 
            }
        } else if (fSex[1].checked) {
            genero = 'mulher'
            if(idade >= 0 && idade <= 10) {
                img.setAttribute('src', 'img/f-crianca.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'img/f-jovem.png')
            } else if (idade < 50){
                img.setAttribute('src', 'img/f-adulto.png') 
            } else {
                img.setAttribute('src', 'img/f-idoso.png') 
            }
        }

        resultado.style.textAlign = 'center'
        resultado.innerHTML = `Detectamos ${genero} com ${idade} anos. <br>`
        resultado.appendChild(img)
        img.style.alignContent = 'center'
    }

}