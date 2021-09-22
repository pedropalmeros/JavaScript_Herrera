console.log('For tradicional');

const heroes=['Batman','Superman','Mujer maravilla','Aquaman'];

for (let i = 0; i<heroes.length; i++){
    console.log(heroes[i]);
}

console.warn('For in');
for(let heroe in heroes){
    console.log(heroes[heroe]);
}

console.warn('For of'); // Like in python with iterators

for(let heroe of heroes){
    console.log(heroe)
}