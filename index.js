"use strict";
var myName;

const quotient = 4.4 / 2.0; // Change this line
const quotient2 = 4.4 / 2.0; // Change this line

// Only change code below this line
const increment = (number = 5, value = 2) => number + value;
// Only change code above this line

const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [...arr1];  // Change this line

//console.log(arr2);

// Only change code below this line
class Vegetable {
    constructor(){
      this.name = "carrot";
    }
  }
  // Only change code above this line
  
  const carrot = new Vegetable('carrot');
  //console.log(carrot.name); // Should display 'carrot'

  // Only change code below this line
// Only change code below this line
class Thermostat {
    constructor(temp){
        this._temperature = temp;
      }
      get temperature(){
        return  5/9 * (this._temperature - 32) ;
      }
      set temperature(tempC){
        this._temperature = tempC * 9.0 / 5 + 32;
      }
  }
  // Only change code above this line
  
  const thermos = new Thermostat(76); // Setting in Fahrenheit scale
  let temp = thermos.temperature; // 24.44 in Celsius
  console.log(temp);
  thermos.temperature = 26;
  temp = thermos.temperature; // 26 in Celsius
  console.log(temp);

  const makeServerRequest = new Promise((resolve, reject) => {
    // responseFromServer is set to true to represent a successful response from a server
    let responseFromServer = true;
      
    if(responseFromServer) {
      resolve("We got the data");
    } else {  
      reject("Data not received");
    }
  });
  
  makeServerRequest.then(result => {
    console.log(result);
  })

  function sumAll(arr) {
    arr.sort(( a, b ) =>  a - b);
    [a, b] = arr;
    let sum = 0;
  
    for(let i = a; i < b; i++) {
      sum += i;  
    }
    return sum;
  }