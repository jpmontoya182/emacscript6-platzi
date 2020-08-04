// inicializacion de variables y literal templates
/// anteriormente
function newFunction(name, age, country) {
  var name = name || "Juan";
  var age = age || 20;
  var country = country || "MX";

  console.log(name, age, country);
}

newFunction();
// es6

function newFuntionWithES6(name = "juanes", age = 37, country = "CO") {
  console.log(name + " " + age + " " + country);
}
newFuntionWithES6("Ernesto", 99, "Alemania");

let hola = "Hello"
let mundo = "World"
let epicPhrase = hola + ' ' + mundo
console.log(epicPhrase)
let epicPhrase2 = `${hola} ${mundo}`
console.log(epicPhrase2)
