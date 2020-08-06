// operador de reposo -> llamo los objetos que necesito y el resto lo envio al objeto all.
const obj = {
  name: "Juanes",
  age: 37,
  country: "CO",
};

let { age, ...all } = obj;
console.log(all);

// operador de propagacion (estruturacion) -> unir varios objetos en uno
const obj = {
  name: "Juanes",
  age: 37,
};
const obj1 = {
  ...obj,
  country: "CO",
};
console.log(obj1);

// promise.finally
const helloWorld = () => {
  return new Promise((resolve, reject) => {
    // logica
    //....
    true
      ? setTimeout(() => resolve("it was resolve the request..."), 3000)
      : reject(new Error("it was reject the request..."));
  });
};

helloWorld()
  .then((response) => console.log(response))
  .catch((error) => console.log(error))
  .finally(() => console.log("finalizo todo el proceso ...."));

// regex
const regexDate = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
const match = regexDate.exec('2020-04-02');
const year = match[1];
const month = match[2];
const day = match[3];
// 
console.log(match)
console.log(year, month, day)