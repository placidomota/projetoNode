//Instaciamos o objeto Date
let data = new Date();

// Utilizamos a instancia para recuperar a hora e minutos
let hora = data.getHours();
let min = data.getMinutes();


let saudacao;
if(hora <= 11){
    saudacao= "Bom dia";
}else if(hora <= 17){
    saudacao= "Boa tarde";
}else {
    saudacao= "Boa noite.";
}

console.log("Ola " + saudacao);
console.log("Agora são " + hora + " horas e " + min + " minutos.");


