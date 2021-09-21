let personaje = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    coords:{
        lat: 34.034,
        lng: -118.70,
    },
    trajes:['Mark I', 'Mark V', 'Hulkbuster'],
    direction: {
        zip: '10880',
        ubicacion: 'Malibu, California',
    },
    'ultima-pelicula':'Infinity War',
};

console.log( personaje )
console.log('Nombre: ', personaje.nombre);
console.log('Nombre: ', personaje['nombre']);
console.log('Edad: ', personaje.edad);
console.log('Coords:', personaje.coords);
console.log('Latitud: ', personaje.coords.lat);

console.log('No. Trajes: ', personaje.trajes.length);
console.log('Ultimo traje: ',personaje.trajes[personaje.trajes.length-1])

const x = 'vivo';
console.log('Vivo', personaje[x]);

console.log('Última película: ', personaje["ultima-pelicula"])


// MAS DETALLES
delete personaje.edad;

console.log(personaje);

personaje.casado = true;



const entriesPares = Object.entries(personaje);
console.log(entriesPares);

Object.freeze( personaje );

personaje.dinero = 100000000000000;
console.log(personaje)


const propiedades = Object.getOwnPropertyNames( personaje );
const valores = Object.values( personaje );
console.log({propiedades, valores})
console.log({valores})