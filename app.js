const name = 'James';

const person = { first: name };

console.log(person);

const sayHelloLinting = (fName) => console.log(`Hello ${fName}`);

sayHelloLinting(person.first);
sayHelloLinting('asdf');
