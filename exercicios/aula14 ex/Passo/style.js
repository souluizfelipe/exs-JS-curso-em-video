function contar() {
    
    var numIn = document.querySelector('input#inicio')
    var numFim = document.querySelector('input#fim')
    var passo = document.querySelector('input#passo')

    var res = document.querySelector('div#res')

    

    if (numIn.value.length == 0 ) {
        alert('Erro! Falta o número inicial')
        res.innerHTML = ""
    } else if (numFim.value.length == 0) {
        alert('Erro! Falta o número Final')
        res.innerHTML = ""
    } else if (passo.value.length == 0) {
        alert('Passo não encontrado')
        res.innerHTML = ""
    } else {
        
        let i = Number(numIn.value)
        let f = Number(numFim.value)
        let p = Number(passo.value)
        if (p <= 0){
            alert('Passo inválido. Considerando passo 1')
        }
        if (i < f){
            for (let c = i; c <= f; c += p){
                res.innerHTML += ` ${c} \u{27A1}`
            }
        } else{
            for (let c = i; c >= f; c -= p){
                res.innerHTML += ` ${c} \u{27A1}`
            }
        }
        
        res.innerHTML += `\u{1f3c1}`
        
    }
}



