console.log('Valor y referencias')

// ASIGNACION POR VALOR
let a = 10;
let b = a; 
a = 30;

console.log({a,b})

let juan = {nombre: 'Juan'};
let ana  = juan;
ana.nombre = 'Ana'
console.log({juan,ana})
// En JS TODOS LOS OBJETOS SE PASAN POR REFERENCIA.

// EN JS TODOS LOS PRIMITIVOS SE PASAN POR VALOR
// EN JS TODOS LOS OBJETOS SE PASAN POR REFERENCIA. 

const cambiaNombre = ( persona ) =>{
    persona.nombre = 'Tony';
    return {nombre: 'Tony'}
}
let peter = {nombre: 'Peter'};
let tony = cambiaNombre(peter);
console.log({peter, tony})


let pedro = {nombre: 'Pedro'};
// No es REST, xq no está en una función,
// Es Spread, que ayuda a separar objetos, rompe la referencia. 
let pablo ={...pedro}
pablo.nombre = 'Pablo'

console.log({pedro,pablo})

const cambiaNombre2 = ({...persona})=>{
    persona.nombre = 'Tonio';
    return persona;
}
let tonio = cambiaNombre2(pedro);
console.log({pedro, pablo, tonio})


// Arreglos
const frutas=['Manzana','Pera','Piña'];
const otrasFrutas = [...frutas]; // Se separan las frutas y se genera un nuevo arreglo.// Es más rápido 
const otrasFrutas01 = frutas.slice();

otrasFrutas.push('Mango')
otrasFrutas01.push('Plátano')

console.table({frutas, otrasFrutas,otrasFrutas01})


