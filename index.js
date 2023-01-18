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
 // console.log(temp);
  thermos.temperature = 26;
  temp = thermos.temperature; // 26 in Celsius
  //console.log(temp);

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
    //console.log(result);
  })

  function sumAll(arr) {
    arr.sort(( a, b ) =>  a - b);
    let [a, b] = arr;
    let sum = 0;
  
    for(let i = a; i <= b; i++) {
      sum += i;  
    }
    return sum;
  }
  
  //console.log(sumAll([1, 4]));

  function diffArray(arr1, arr2) {
    const newArr = [];
    let arr = [...arr1, ...arr2];
    let k = 0;
    let coincidence;
  
    for(let i = 0; i < arr.length; i++) {
      coincidence = false;

      for(let j = i + 1; j < arr.length; j++) {
        if(arr[i] == arr[j]) { //console.log(arr[i]);
          arr[i] = 0;
          arr[j] = 0;
        }
      }
    }
    for(let i = 0; i < arr.length; i++) {
      if(arr[i] != 0) { 
        newArr[k] = arr[i];
        k++;
      }
    }

    return newArr;
  }

  console.log(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));

  let dog = {
    name: "Spot",
    numLegs: 4
  };
  // Only change code below this line
  console.log(dog.name);
  console.log(dog.numLegs);

  let dog1 = {
    name: "Spot",
    numLegs: 4,
  sayLegs: function() {
    return `This dog has ${dog1.numLegs} legs`;
  }
  };
  
  dog1.sayLegs();

  let dog2 = {
    name: "Spot",
    numLegs: 4,
    sayLegs: function() {return "This dog has " + this.numLegs + " legs.";}
  };
  
  dog2.sayLegs();

  function Dog() {
    this.name = "Albert";
    this.color = "blue";
    this.numLegs = 4;
  }

  let hound = new Dog();

  function Dog(name, color) {
    this.name = name;
    this.color = color;
    this.numLegs = 4;
  }
  
  let terrier = new Dog("Carlos", "white");

  function House(numBedrooms) {
    this.numBedrooms = numBedrooms;
  }
  
  // Only change code below this line
  let myHouse = new House(4);
  myHouse instanceof House;

  function Bird(name) {
    this.name = name;
    this.numLegs = 2;
  }
  
  let canary = new Bird("Tweety");
  let ownProps = [];
  // Only change code below this line
  for (let property in canary) {
    if(canary.hasOwnProperty(property)) {
      ownProps.push(property);
    }
  }

  const sum = (...rest) => {
 
    return rest.reduce((a, b) => a + b, 0);
  }

  const highTemperatures = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
  };
  
  // Only change code below this line
  
  const { today, tomorrow } = highTemperatures;
  
  // Only change code above this line

  const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
  };
 
  const {today:highToday, tomorrow:highTomorrow} = HIGH_TEMPERATURES;
  
  const LOCAL_FORECAST = {
    yesterday: { low: 61, high: 75 },
    today: { low: 64, high: 77 },
    tomorrow: { low: 68, high: 80 }
  };
  
  // Only change code below this line
    
  const { today:lowToday, tomorrow:highToday } = LOCAL_FORECAST;
  
  // Only change code above this line
 
  const LOCAL_FORECAST = {
    yesterday: { low: 61, high: 75 },
    today: { low: 64, high: 77 },
    tomorrow: { low: 68, high: 80 }
  };
  
  // Only change code below this line
    
  const { today: { low:lowToday, high:highToday }, tomorrow: { low, high } } = LOCAL_FORECAST;
  
  let a = 8, b = 6;
  // Only change code below this line
   const [a, b] = [6, 8];

   function removeFirstTwo(list) {
    // Only change code below this line
    const [ ,,...shorterList] = list; // Change this line
    // Only change code above this line
    return shorterList;
  }
  
  const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const sourceWithoutFirstTwo = removeFirstTwo(source);

  const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
  };
  
  // Only change code below this line
  const half = ({max,min}) => (max + min) / 2.0; 
  // Only change code above this line

  const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"]
  };
  function makeList(arr) {
    // Only change code below this line
    const failureItems = [];
    for(let i = 0; i < arr.length; i++) {
      failureItems[i] = `<li class="text-warning">${arr[i]}</li>`;
    }
      // Only change code above this line
  
    return failureItems;
  }
  
  const failuresList = makeList(result.failure);

  const createPerson = (name, age, gender) => {
    // Only change code below this line
    return {
      name,
      age,
      gender
    };
    // Only change code above this line
  };