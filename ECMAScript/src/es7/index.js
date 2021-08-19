/**
 * Includes
 */
 let numbers = [1, 2, 3, 7, 8];
 const VALUE = 7;
 
 if (numbers.includes(VALUE)) {
   console.log(`The array contains the value: ${VALUE}`);
 } else {
   console.log(`The array doesn't contains the value: ${VALUE}`);
 }
 
 /**
  * Pow
  */
 let base = 4;
 let exponent = 4;
 let result = base ** exponent;
 console.log(`${base}^${exponent} = ${result}`);