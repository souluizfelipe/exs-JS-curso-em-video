let num = document.querySelector('input#num')
let lista = document.querySelector('select#selRes')
let res = document.querySelector('p#info')
let valores = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}
 
function adicionarNumero() {
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `${num.value} Adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        alert('Valor inválido ou já encontrado na lista')
    }

    num.value = ''
    num.focus()
}

function calcular() {
    if(valores.length == 0) {
        alert('Adicione valores para calcular')
    } else {
        let tot = valores.length
        let maior = Math.max(...valores)
        let menor = Math.min(...valores)
        let soma = 0
        let media = 0

        for(let pos in valores){
            soma += valores[pos]
        }

        media = soma/valores.length
        media.toFixed(2)

        res.innerHTML = ''
        res.innerHTML += `<p><strong>${tot}</strong> números adicionados </p>`
        res.innerHTML += `<p><strong>${maior}</strong> é o meior número</p>`
        res.innerHTML += `<p><strong>${menor}</strong> é o menor número</p>`
        res.innerHTML += `<p><strong>${soma}</strong> é a soma de todos os valores</p>`
        res.innerHTML += `<p><strong>${media}</strong> é a média de todos os valores</p>`
    }
}