let list = []
let numInp = document.querySelector('input#num')
let selRes = document.querySelector('select#selRes')

function adicionarNumero() {
      
    let num = numInp.value

    if (num == 0 || num > 100 || num.value == '' ) {
        alert('Erro, número inválido')
    // } else if (num == list.indexOf(num)) {
    //     alert('Número já inserido')
    } else {
        let item = document.createElement('option')
        item.text = `${num} Adicionado`
        selRes.appendChild(item)
        list.push(num)
    }
    numInp.value = ''
    console.log(list)
}

function calcular() {
    if (list.length == 0) {
        alert('Adicone números para ver os resultados')
    } else {
        let info = document.querySelector('p#info')
        let total = list.length
        let bigger = Math.max(...list)
        let lower = Math.min(...list)
        // let sum = Math.sum(...list)
        // let aver = Math.round(...list)

        info.innerHTML = `O total de elementos é ${total} <br> A soma dos elementos é ${total}<br> O maior número é ${bigger} e o menor ${lower} <br> E a média dos núemros é ${total}`
    }
}