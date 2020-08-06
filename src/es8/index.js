// objects.entries -> return the values like a matrix
const data = {
  frontend: "juan",
  backend: "pablo",
  design: "don montoya",
};

const entries = Object.entries(data);
console.log(entries, entries.length);

// Object.values -> return only the values, doesn't return the object key

const data2 = {
  frontend: "juan",
  backend: "pablo",
  design: "don montoya",
};
const values = Object.values(data2);
console.log(values, values.length);

//
const wordString = "hello";
console.log(wordString.padStart(7, "hi"));
console.log(wordString.padEnd(12, "-----"));

// async and await
const helloWorld = () => {
  return new Promise((resolve, reject) => {
    // logica
    //....
    true
      ? setTimeout(() => resolve("it was resolve the request..."), 3000)
      : reject(new Error("it was reject the request..."));
  });
};

const callFunctionAsync = async () => {
  try {
    const result = await helloWorld();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

callFunctionAsync();
