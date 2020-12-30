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

/// count how many overused words are there 

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
console.log(betterWords);
console.log(overusedWords);




// ******* BUILD A LIBRARY *******

class Media {
  constructor(title) {
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }
  
  get title() {
    return this._title;
  }
  
  get isCheckedOut() {
    return this._isCheckedOut;
  }
  
  set isCheckedOut(check) {
    this._isCheckedOut = check;
  }
  
  get ratings() {
    return this._ratings;
  }
  
  getAverageRating() {
    let ratingsSum = this._ratings.reduce((currentSum, rating) => currentSum + rating, 0);
    return ratingsSum / this._ratings.length;
  }
  
  toggleCheckOutStatus() {
    this._isCheckedOut = !this._isCheckedOut;
  }
  
  addRating(rating) {
    if ( rating >= 1 && rating <= 5 ) {
      this._ratings.push(parseInt(rating));
    } else {
      console.log('A rating should be an integer between 1 and 5.')
    }
  }
}


class Book extends Media {
  constructor(title, author, pages) {
    super(title);
    this._author = author;
    this._pages = pages;
  }
  
  get author() {
    return this._author;
  }
  
  get pages () {
    return this._pages;
  }
}

class Movie extends Media {
  constructor(title, director, runTime) {
    super(title);
    this._director = director;
    this._runTime = runTime;
  }
  
  get director() {
    return this._director;
  }
  
  get runTime() {
    return this._runTime;
  }
}

class CD extends Media {
  constructor(title, artist, songs) {
    super(title);
    this._artist = artist;
    this._songs = songs;
  }
  
  get artist() {
    return this._artist;
  }
  
  get songs() {
    return this._songs;
  }
  
  shuffle() {
    for (let i = this._songs.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this._songs[i], this._songs[j]] = [this._songs[j], this._songs[i]];
      }
    return this._songs;
    }
  }

const historyOfEverything = new Book('A Short History of Nearly Everything', 'Bill Bryson', 544);

historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything.isCheckedOut);

historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
console.log(historyOfEverything.getAverageRating());


const speed = new Movie('Speed', 'Jan de Bont', 116);

speed.toggleCheckOutStatus();
console.log(speed.isCheckedOut);

speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
console.log(speed.getAverageRating());


const songsAboutJane = new CD('Songs About Jane', 'Maroon 5', ['Harder to Breathe', 'This Love', 'Must Get Out', 'Sunday Morning', 'The Sun']);

console.log(songsAboutJane.isCheckedOut);

songsAboutJane.addRating(3);
songsAboutJane.addRating(5);
songsAboutJane.addRating(4);
console.log(songsAboutJane.getAverageRating());

console.log(songsAboutJane.shuffle());






// ******* The Brown Bear - Elements Exercise *******

<body>
  <h1>The Brown Bear</h1>
  <div id="introduction">
    <h2>About Brown Bears</h2>
    <p>The brown bear (<em>Ursus arctos</em>) is native to parts of northern Eurasia and North America. Its conservation status is currently <strong>Least Concern</strong>.<br /><br /> There are many subspecies within the brown bear species, including the Atlas bear and the Himalayan brown bear.</p>
    <h3>Species</h3>
    <ul>
      <li>Arctos</li>
      <li>Collarus</li>
      <li>Horribilis</li>
      <li>Nelsoni (extinct)</li>
    </ul>
    <h3>Features</h3>
    <p>Brown bears are not always completely brown. Some can be reddish or yellowish. They have very large, curved claws and huge paws. Male brown bears are often 30% larger than female brown bears. They can range from 5 feet to 9 feet from head to toe.</p>
  </div>
  <div id="habitat">
    <h2>Habitat</h2>
    <h3>Countries with Large Brown Bear Populations</h3>
    <ol>
      <li>Russia</li>
      <li>United States</li>
      <li>Canada</li>
    </ol>
    <h3>Countries with Small Brown Bear Populations</h3>
    <p>Some countries with smaller brown bear populations include Armenia, Belarus, Bulgaria, China, Finland, France, Greece, India, Japan, Nepal, Poland, Romania, Slovenia, Turkmenistan, and Uzbekistan.</p>
  </div>
  <div id="media">
    <h2>Media</h2>
    <img src="https://content.codecademy.com/courses/web-101/web101-image_brownbear.jpg" alt="A Brown Bear"/>
    <video src="https://content.codecademy.com/courses/freelance-1/unit-1/lesson-2/htmlcss1-vid_brown-bear.mp4" width="320" height="240" controls>Video not supported</video>
  </div>
</body>



// The Brown Bear - Structure exercises

  <head>
		<title>Brown Bears</title>
	</head>
  <body>
    <h1>The Brown Bear</h1>
    <div id="introduction">
      <h2>About Brown Bears</h2>
      <p>The brown bear (<em>Ursus arctos</em>) is native to parts of northern Eurasia and North America. Its conservation status is currently <strong>Least Concern</strong>.<br /><br /> There are many subspecies within the brown bear species, including the
        Atlas bear and the Himalayan brown bear.</p>
      <a href="https://en.wikipedia.org/wiki/Brown_bear" target="_blank"> Learn More</a>
      <h3>Species</h3>
      <ul>
        <li>Arctos</li>
        <li>Collarus</li>
        <li>Horribilis</li>
        <li>Nelsoni (extinct)</li>
      </ul>
      <h3>Features</h3>
      <p>Brown bears are not always completely brown. Some can be reddish or yellowish. They have very large, curved claws and huge paws. Male brown bears are often 30% larger than female brown bears. They can range from 5 feet to 9 feet from head to toe.</p>
    </div>
    <div id="habitat">
      <h2>Habitat</h2>
      <h3>Countries with Large Brown Bear Populations</h3>
      <ol>
        <li>Russia</li>
        <li>United States</li>
        <li>Canada</li>
      </ol>
      <h3>Countries with Small Brown Bear Populations</h3>
      <p>Some countries with smaller brown bear populations include Armenia, Belarus, Bulgaria, China, Finland, France, Greece, India, Japan, Nepal, Poland, Romania, Slovenia, Turkmenistan, and Uzbekistan.</p>
    </div>
    <div id="media">
      <h2>Media</h2>
      <img src="https://content.codecademy.com/courses/web-101/web101-image_brownbear.jpg" />
      <video src="https://content.codecademy.com/courses/freelance-1/unit-1/lesson-2/htmlcss1-vid_brown-bear.mp4" width="320" height="240" controls>Video not supported</video>
    </div>
  </body>
