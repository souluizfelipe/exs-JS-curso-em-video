function parInp(n) {
    if (n%2 == 0) {
        return 'par'
    } else {
        return 'impar'
    }
}

let res = parInp(17)
console.log(res)