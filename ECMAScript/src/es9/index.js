/**
 * Spread Operator
 */
 const person = {
    name: 'Edgar',
    age: 21,
    country: 'MX'
  };
  
  let { name, ...additionalInfo } = person;
  console.log(`name: ${name}`);
  console.log(`additional information: `, additionalInfo);
  console.log(person) //the object is not changed
  
  let { country, ...nameAndAge } = person;
  console.log(`name and age: `, nameAndAge.name, nameAndAge.age);
  
  /**
   * Porpagation Properties
   */
  const baby = {
    name: 'Ramon',
  };
  
  const family = {
    ...baby,
    dad: 'Bob',
    mom: 'Mary',
  };
  console.log(`family: `, family);
  
  
/**
 * Promise Finally
 */
function getRandomInt(min, max) {
    //Credits: https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


  const guessNumber = (guessNumber) => {
      console.log("Guess a number from 1-10")
      var randNum = getRandomInt(1,10)
    return new Promise((resolve, reject) => {
        if(guessNumber == randNum){
            resolve('Yay! You guessed the number');
        } else{
            reject(`The random number is ${randNum}`); //If not enough money, reject the process
        }
    });
  };
  
  guessNumber(3)
    .then(result => console.log( result))
    .catch(err => console.log(err))
    .finally(() => console.log('Thanks for Playing'));
  
  /**
   * Regex
   */
  const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
  const match = regexData.exec('2021-10-10');
  const year = match[1];
  const month = match[2];
  const day = match[3];
  console.log('Date -> ', year, month, day);