/* This is css in the consolo log, we need to use %c in order to make it work*/

console.log('%cHola Palmeros','color:yellow; font-weight:bold');

let a=10,
    b=20,
    c = 'Hola',
    d = 'Spiderman';
    x = a + b;

// it prints the variable with the value
console.log({a:10});

// it just print the value of the variable
console.log(a);

// It print a table with the variable and values
// | variable | Value |
console.table({a,b,c,d,x})