console.log("Protip Retorno")

function crearPersona(nombre, apellido){
    return{
        // nombre: nombre,
        // apellido: apellido,
        nombre, apellido
    }
}

const crearPersona2 = (nombre,apellido)=>({nombre,apellido})

const persona=crearPersona('Pedro','Flores')
console.log(persona);

const persona2 = crearPersona2('Fernando','Flores');
console.log(persona2);

function imprimeArgumentos(){
    console.log(arguments);
}
imprimeArgumentos(10, true, 'hola','Fernado','Hola')


//Parámetros Rest, 
// X (...args, valor1)  -> Incorrecto
// (edad,...args) -> Correcto, pero edad tendría su propio campo 
const imprimeArgumentos2 = (edad, ...args)=>{
    return args;
}
const [casado, vivo, nombre, saludo] = imprimeArgumentos2(10, true, false, 'Fernando', 'Hola');
console.log({casado, vivo, nombre, saludo});

const{ apellido: nuevoApellido} = crearPersona('Fernando','Herrera');
console.log({nuevoApellido})

const tony={
    nombre:'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    trajes: ['Mark I','Mark V', 'Hulkbuster'],
}

const imprimePropiedades = (personaje)=>{
    console.log(personaje.nombre);
    console.log(personaje.codeName);
    console.log(personaje.vivo);
    console.log(personaje.edad);
    console.log(personaje.trajes);
}

imprimePropiedades(tony);

const imprimePropiedades01 = ({nombre, codeName, vivo, edad, trajes})=>{
    console.log({nombre});
    console.log({codeName});
    console.log({vivo});
    console.log({edad});
    console.log({trajes});
}

imprimePropiedades01(tony)