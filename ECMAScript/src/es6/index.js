/*
 * Default Params
 */
 function displayName(name, age, country) {
    var name = name || 'Edgar';
    var age = age || 21;
    var country = country || 'MX';
    console.log(name, age, country);
  }
  
  // es6
  function displayNameES6(name = 'Edgar', age = 21, country = 'MX') {
    console.log(name, age, country);
  }
  
  displayName();
  displayNameES6('Adrian', 18, 'Costa Rica');
  
  /*
   * Concatenation - Template Literals
   */
  let hello = 'Hello';
  let world = 'World';
  let epicPhrase = hello + ' ' + world + '!';
  
  // es6
  let epicPhraseES6 = `${hello} ${world}!`;
  
  console.log(epicPhrase);
  console.log(epicPhraseES6);

/*
 * Multiline
 */
let lorem =
'Mollit ea veniam ad magna. Voluptate qui commodo do commodo elit officia. \n' +
'Sit quis mollit esse quis reprehenderit labore esse nisi.';
console.log('Before ES6 -> ', lorem);

// es6
let loremES6 = `Velit aliqua culpa nisi aute nulla sit.
Reprehenderit deserunt id officia excepteur excepteur
adipisicing ut sit enim dolor laboris nulla exercitation.`;
console.log(`After ES6 -> ${loremES6}`);

/*
* Destructuring
*/
let person = {
name: 'Ramon',
age: '33',
country: 'MX'
};
console.log('Before ES6 -> ', person.name, person.age, person.country);

// es6
let { name, age, country } = person;
console.log(`After ES6 -> ${name} ${age} ${country}`);

/*
* Spread Operator
*/
let team1 = ['Ramon', 'Diego', 'Bob'];
let team2 = ['Valeria', 'Hope', 'Camila'];
let education = ['David', 'John', 'Phill', 'Sam', 'Ramon', 'Diego', 'Camila'];
console.log('Before ES6 -> ', education);

let educationES6 = ['David', ...team1, ...team2]; //append team1 and team2 arrays
console.log(`After ES6 -> ${educationES6}`);

/**
* Var, Let and Const
*/
{
    var globalVar = 'Global Var'; //accessible anywhere
}
console.log(globalVar)

{
    let globalLet = 'Global Let'; //accessible only on this block of code 
    console.log(globalLet)
}
// console.log(globalLet) // <-- error!

/**
 * Parameters in Objects
 */
 let name = 'Adrian';
 let age = 15;
 
 const obj = {
   name: name,
   age: age
 };
 console.log('Before ES6 -> ', obj);
 
 // es6
 const objES6 = { name, age }; //create obj using the key as variable name and the value as the variable value
 console.log(`After ES6 -> `, objES6);
 
 /**
  * Arrow Functions
  */
 const names = [
   { name, age },
   { name: 'Yesica', age: 27 }
 ];
 
 let listOfNames = names.map(function(item) {
   console.log('Before ES6 -> ', item.name);
 });
 
 // es6
 let listOfNamesES6 = names.map(item => console.log(`After ES6 -> ${item.name}`));
 
 /**
  * Promises
  */
 const helloPromise = foo => {
   return new Promise((resolve, reject) => {
     if (foo) {
       resolve('Hey!');
     } else {
       reject('Upss!');
     }
   });
 };
 
 const foo = false;
 helloPromise(foo)
   .then(response => console.log('response -> ', response))
   .then(() => console.log('message -> Hello World!'))
   .catch(error => console.log('error -> ', error));


/**
 * Classes
 */
 class Calculator {
  constructor() {
    this.valueA = 0;
    this.valueB = 0;
  }

  Sum(valueA, valueB) {
    this.valueA = valueA;
    this.valueB = valueB;
    return this.valueA + this.valueB;
  }
}

const calc = new Calculator();
console.log('Calc Result -> ', calc.Sum(2, 3));

/**
 * Modules
 */
import { hello, hola } from './greeting-module.js';
console.log('Greeting Module -> ', hello());
console.log('Greeting Module -> ', hola());

/**
 * Generators
 * 
 * Iterators and Generators bring the concept of iteration directly into the core language and provide a mechanism for customizing the behavior of for...of loops.
 */
function* helloWorld() {
  if (true) {
    yield 'Hello, ';
  }

  if (true) {
    yield 'World!';
  }
}
const generatorHello = helloWorld();
console.log('generatorHello first call -> ', generatorHello.next().value);
console.log('generatorHello second call -> ', generatorHello.next().value);
console.log('generatorHello third call -> ', generatorHello.next().value);
