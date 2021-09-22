console.log("Hola, Ciclos FOR");

const carros = ['Ford','Mazda','Honda','Toyota'];

let i = 0;

// while(i < carros.length){
//     console.log(carros[i]);
//     i++;
// }

while(carros[i]){
    console.log(carros[i]);
    i++;
}

console.warn('Do While');
let j = 0;

do{
    console.log(carros[j]);
    j++;

}while(carros[j]);