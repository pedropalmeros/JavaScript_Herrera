const arr = new Array(10);
console.log (arr)

const arr01 = [];
console.log (arr01)

let videoJuegos = ['Mario 3', 'Megaman', 'Chrono Trigger'];
console.log(videoJuegos);

console.log(videoJuegos[0]);

let arregloCosas = [
    true,
    123,
    'Fernando',
    1 + 2,
    function(){},
    ()=>{},
    {a:1},
    ['X','Megaman','Zero','Dr. Light',['Dr. Willy', 'Woodman']],
];

console.log(arregloCosas[7][4][1]);


let juegos=['Zelda','Mario','Metroid','Crono'];
console.log('Largo:', juegos.length);

let primero = juegos[0];
let ultimo = juegos[ juegos.length - 1];

console.log({primero, ultimo});

juegos.forEach((elemento,indice,arr)=>{
    console.log({elemento,indice, arr})
});

let nuevaLongitud = juegos.push('F-Zero');

console.log(nuevaLongitud)

console.log({nuevaLongitud, juegos})

nuevaLongitud = juegos.unshift('Fire Emblem');

console.log({nuevaLongitud, juegos})


let juegoBorrado = juegos.pop();

console.log({juegoBorrado, juegos})



let pos = 1;
console.log( juegos );
let juegosBorrados = juegos.splice(pos, 2);
console.log({juegosBorrados, juegos});

let metroidIndex = juegos.indexOf('Metroid');
console.log({metroidIndex})