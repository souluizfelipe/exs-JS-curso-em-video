let num = [5, 8]

num[2] = 4
num.push(2)

console.log(`nosso vetor é o ${num}`)

// num.sort()
// for(let i = 0 ; i < num.length; i++ ){
//     console.log(num[i])
// }

for (let i in num){
    console.log(num[i])
} 

let pos = num.indexOf(8)
let pos1 = num.indexOf(0)
console.log('posição', pos, pos1)

