function gerarTabuada() {
    let inptext = document.querySelector('input#nuntxt')
    let num = Number(inptext.value)
    let res = document.querySelector('select#res')

    res.innerHTML = ""

    if (inptext.value.length == 0) {
        alert('Faltam dados, favor atualizar')
        res.innerHTML = `<option value="erro">Sem dados irmão</option>`
    } else {
        for(let r = 1; r <= 10; r++) {
            let item = document.createElement('option')
            item.text = `${num} x ${r} = ${num*r}`
            item.value = `tab${r}`
            res.appendChild(item)
        }
        // res.innerHTML += `<option value="vezes${r}">${num} x ${r} = ${num*r}<\option>` 
    }
}