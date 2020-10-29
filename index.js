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





//Iteration Used Word

let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];

const storyWords = story.split(' ');

console.log(storyWords.length);

const betterWords = storyWords.filter(words => {
  !unnecessaryWords.includes(words); 
})

//count how many overused words are there 

let count = 0;
let countTwo = 0;
let countThree = 0;


  for (word of storyWords){
    if (word === 'really'){
      count += 1;
    }
      else if (word === 'very'){
      countTwo += 1;
    }
      else if (word === 'basically'){
      countThree += 1;
    }
  }

 //count how many sentences are in the paragraph
 let counter = 0;

storyWords.forEach(word => {
  if (word[word.length-1] === '.' || word[word.length-1] === '!') {
    counter+=1;
  }
});

console.log("The counter is: " + counter);
console.log("Count one equals: " + count + " Count two equals: " + countTwo + " Count three equals: " + countThree);
console.log(betterWords;
console.log(overusedWords);
