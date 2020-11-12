//The forecast today is 293 Kelvin
const Kelvin= 0;

//Convertion of Kelvin to Celsius
Celsius= Kelvin - 273;

//Calculatin Fahrenheit
Fahrenheit= Celsius * (9/5) + 32;

//Rounding the number saved to fahrenheit
let fahrenheit= Math.round(Fahrenheit);

//Rounding down the Farenheit temperature
fahreinheit= Math.floor(Fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

//Coverting celsius to the Newton scale
Newton= Celsius * (33/100);

//Rounding down the Newton temperature
let newton= Math.floor(Newton);

console.log(`The temperature ${newton} degrees Newton.`)