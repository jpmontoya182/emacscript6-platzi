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

let hola = "Hello";
let mundo = "World";
let epicPhrase = hola + " " + mundo;
console.log(epicPhrase);
let epicPhrase2 = `${hola} ${mundo}`;
console.log(epicPhrase2);

// classes, modules and generators
class calculator {
  constructor() {
    this.valueA = 0;
    this.valueB = 0;
  }
  sum(valueA, valueB) {
    this.valueA = valueA;
    this.valueB = valueB;
    return this.valueA + this.valueB;
  }
}

const calc = new calculator();
console.log(calc.sum(2, 10));

import { hello } from "./module";
var hello = require("./module.js");

console.log(hello());
// -------
function* helloWorld() {

  if (true) {
    yield "hello";
  }

  if (true) {
    yield "World";
  }

}

const generatorHello = helloWorld();
console.log(generatorHello.next().value)
console.log(generatorHello.next().value)
console.log(generatorHello.next().value)
// -------