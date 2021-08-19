/*
* Object Entries
*/
const data = {
    frontend:'Edgar',
    backend:'Adrian',
    design:'Pablo',
}

const entries = Object.entries(data); //returns a 2D Array (Matrix)
console.log("Object Entries:");
console.log(entries);
console.log(entries.length);

/*
* Object Values
*/
const values = Object.values(data); //returns an array with each value of the obj
console.log("Object Values:");
console.log(values);
console.log(values.length);


/*
* String Padding
*/
let myStr = "Edgar";
console.log(myStr.padStart(10));
console.log(myStr.padStart(10, "foo")); //pads the current string with another string
console.log(myStr.padEnd(10, "*"));


/*
* Async Await
*/

const EMPANADA_PRICE = 4

const prepareEmpanada = (money) => {
    return new Promise((resolve, reject) => {
        if(money >= EMPANADA_PRICE) {    
            console.log('We are baking your Empanada')
            setTimeout(() => {
                resolve('Your empanada is ready');
            }, 6000);  //If the amount of money is correct, the program will take 6s to bake the empanada
        } else {
            reject('Sorry! Not enough money' ); //If not enough money, reject the process
        }
    });
}

const buyEmpanada = async (money) => { 
    try{
        console.log('Welcome to Buenos Aires Empanadas');
        const result = await prepareEmpanada(money); //We send the money and wait for the verification process
        // If the process was successful, the following lines will be executed
        console.log(result);
        console.log('Thanks for your purchase!');
    } catch(e) {
        // Not enough money, the process was rejected
        console.log(e);
    }
}

buyEmpanada(3); // Call the async function 