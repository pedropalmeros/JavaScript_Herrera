// La más tradicional pero no es muy inestable y poco robusta
function saludar(){
    console.log('Hola Mundo');
}

// con el const evitas que se cambie o se pueda reutilizar el nombre
// FUNCION ANÓNIMA, ya que no tiene el nombre
// Se invoca con saludar2();
const saludar2 = function(){
    console.log('Hola Mundo desde saludar 2');
}

const saludar3 = function(nombre='Juan'){
    console.log(arguments)
    console.log('Hola '+nombre);
}

// FUNCIONES DE FLECHA = LAMBDA FUNCTION
// Son más eficientes en cuanto a ejecución 
// Se puede utilizar this.

const saludarFlecha = () => {
    console.log('hola flecha')
}

const saludarFlecha2 = (nombre) => {
    // console.log(arguments); // Manda error si se descomenta. 
    console.log('hola '+ nombre);
}



saludar();
saludar();
saludar();
saludar2();
saludar3('Pedro');
saludar3();
saludar3('Pedro',40, true, 'Mexico')

saludarFlecha();

saludarFlecha2('Palmeros');

function sumar (a,b){
    return a+b;
}

const sumar2 = (a,b) => a+b;

const sumar2_1 = (a,b) => {
    return a+b;
}

function getAleatorio(){
    return Math.random();
}

const getAleatorio2 = () => Math.random();
console.log(getAleatorio())
console.log(getAleatorio2())


