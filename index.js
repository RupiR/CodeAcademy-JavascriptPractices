// ******* Dog Years Practices ******* ""

// Creating a variable to set to my age as a reference

let myAge = 10;

// Creating a variable to save the early years of the dog

let earlyYears = 2;

earlyYears *= 10.5;

// Creating variable that subtracts the early years of dogs life

let laterYears = myAge - 2;

// Multiplying the later years of the dogs life to equal 4 years

laterYears *= 4;

console.log(laterYears);

console.log(earlyYears);

// Adding the early years and later years together

let myAgeInDogYears = earlyYears + laterYears;

// Creating a variable for my name in lower case

let myName = 'Rupi'.toLowerCase();

// Logging the final results as a string

console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);








// Sleep Debt Calculator

const getSleepHours = day => {

  switch (day) {

    case 'monday':

    return 12;

    break;

    case 'tuesday':

    return 7;

    break;

    case 'wednesday':

    return 9;

    break;

    case 'thursday':

    return 5;

    break;

    case 'friday':

    return 6;

    break;

    case 'saturday':

    return 4;

    break;

    case 'sunday':

    return 10;

    break;

  }

}



const getActualSleepHours = () =>

getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');



const getIdealSleepHours = () => {

  const idealHours = 7;

  return idealHours * 7;

};



const calculateSleepDebt = () => {

  const actualSleepHours = getActualSleepHours();

  const idealSleepHours = getIdealSleepHours();

  if ( actualSleepHours === idealSleepHours) {

    console.log('You got the perfect amount of sleep!')

  }

  else if (actualSleepHours > idealSleepHours){

    console.log('You got ' + (actualSleepHours - idealSleepHours ) + ' hours more amount of sleep than needed!')

  }

  else if (actualSleepHours < idealSleepHours){

    console.log('You got ' + (idealSleepHours - actualSleepHours) + ' hours less amount of sleep than needed. You should get more rest!')

  }

}



calculateSleepDebt();



// Whale Talk

const input = 'Hi I am a whale and I enjoy the wate. Hurray!';
const vowels=['a','e','i','o','u'];
let resultArray = [];

for(let i = 0; i < input.length; i++){
  
  for(let j = 0; j < vowels.length; j++){  
    if (input[i] === vowels[j]){
      if(input[i] === 'e'){
        resultArray.push('ee');
        }
        else if(input[i] === 'u'){
          resultArray.push('uu');
        }
        else resultArray.push(input[i]);
      }
    }
}

console.log(resultArray.join('').toUpperCase());
