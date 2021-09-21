

// ==Evalua sólo los valores
// === Evalúa los valores y el tipado.
console.log(5=='5')
console.log(5 === '5')

const dia = 0; // 0: domingo... 1: Lunes ...
const horaActual = 10;

let horaApertura;
let mensaje;

// //if(dia === 0 || dia===6){
// if([0,6].includes(dia))
//     console.log('Fin de semana');
//     horaApertura = 9;
// }else{
//     console.log('Dia entre semana');
//     horaApertura = 11;
// }

horaApertura = ([0,6].includes(dia)) ? 9 : 11;


console.log({horaApertura})


mensaje = (horaActual >= horaApertura) ? 'Está abierto' : 'Está cerrado, hoy abrimos a las ' + horaApertura;
// if(horaActual >= horaApertura){
//     mensaje = 'Está abierto'
// }else{
//     mensaje = 'Está cerrado, hoy abrimos a las ' + horaApertura;
// }
console.log(mensaje)
