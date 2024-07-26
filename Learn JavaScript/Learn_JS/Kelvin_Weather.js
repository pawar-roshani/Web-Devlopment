const kelvin=0;
console.log(kelvin);
//The forecast today is 293 Kelvin.
const Celsius=kelvin-273;
console.log(Celsius);
// the forecast today is 20 degree celsius
let Fahrenheit = Celsius * (9/5) + 32;
console.log(Math.round(Fahrenheit));
// the forecast today is 68 farhenite
Fahrenheit=Math.floor(Fahrenheit);
console.log(Fahrenheit);
// the forecast today is 68 farhenite
console.log(`the temprature is ${Fahrenheit} degree Fahrenheit.`);
let Newton = Celsius * (33/100);
Newton=Math.floor(Newton);
console.log(`The temprature is ${Newton} degree Newton.`);
