// flat -> retorna una matriz aplanada segun  la profundida
let arrayNumber = [1, 2, 3, [9, 8, 7, [10, 11, 12]]];

console.log(arrayNumber.flat(2));

// flat map
let arrayNumber2 = [1, 2, 3, 4, 5];
console.log(arrayNumber2.flatMap((value) => [value, value * 2]));

// eliminar espacios de un string
let hello = "           hello world    ";
console.log(hello.trimStart());
console.log(hello.trimEnd());
console.log(hello.trim());

// try/catch
try {
} catch {
  error;
}

// Object.fromEntries
let entries = [
  ["name", "juanes"],
  ["age", 32],
];
console.log(Object.fromEntries(entries)); // -> {name: 'juanes', age: 32 }

// symbol
let mySimbol = "My Symbol";
let symbol = Symbol(mySimbol);
console.log(symbol.description);


