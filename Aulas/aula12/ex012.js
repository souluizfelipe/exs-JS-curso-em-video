var agora = new Date()
var hora = agora.getHours() 

if (hora <12 && hora > 6){
    console.log(`Bom dia, agora são ${hora} horas`)
} else if (hora > 12 && hora < 18) {
    console.log(`Boa Tarde, agora são ${hora} horas`)
} else {
    console.log(`Boa noite, agora são ${hora} horas`)
}