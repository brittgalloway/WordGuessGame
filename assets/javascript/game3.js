// Listing the words/movies I want to be randomly generated

const movies = [
  "shrek",
  "sinbad",
  "prince of egypt",
  "antz",
  "spirit",
  "wallace & gromit",
  "flushed away",
  "kungfu panda",
  "rise of the guardians",
  "how to train your dragon",
  "home"
];
let computerMovie = "";
let answerArray = [];
let guessRemain = 5;
const acceptableInputs = "qwertyuioplkjhgfdsazxcvbnm &";
// game starts on key up
document.onkeyup = function(event) {
  // defining elements and things
  const blanksElement = document.getElementById("blanks");
  // define score element
  const scoreElement = document.getElementById("score");
  // define guess element
  const guessElement = document.getElementById("wguess");
  // define event key
  const keypress = event.key;
  // let guessRemain;
  let score = 0;
  // score variable
  if (keypress === "Enter") {
    // game starts
    // // start instruction goes away
    document.getElementById("start").style.visibility = "hidden";

    // words randomly choosen
    computerMovie = movies[Math.floor(Math.random() * movies.length)];
    console.log(computerMovie);

    // the array of blank spaces that will be filled will _ where movies letters would be
    for (let index = 0; index < computerMovie.length; index++) {
      answerArray[index] = "_";
      // console.log(answerArray);
    }
    document.getElementById("blanks").textContent = answerArray.join(" ");

    guessElement.innerHTML = "Remaining Guesses: " + guessRemain;
  }
  // if key pressed....
  if (keypress && acceptableInputs.includes(keypress)) {
    let guessKey = false;
    // guessRemain = 5;
    console.log(keypress);

    // Display starting amount of guesses
    // guessElement.textContent = "Remaining Gesses: " + guessRemain;
    // let remainingLetters = answerArray.length;
    for (let key = 0; key < answerArray.length; key++) {
      // if user choice is correct
      if (computerMovie[key] === keypress) {
        guessKey = true;
        answerArray[key] = keypress;
        // remainingLetters--;
        // console.log(remainingLetters);

        //Lets us know letter chosen was correct
        blanksElement.textContent = answerArray.join(" ");
        // guessElement.innerHTML = "Remaining Gesses: " + guessRemain;
      }
    }
    if (!guessKey) {
      guessRemain--;
      guessElement.innerHTML = "Remaining Guesses: " + guessRemain;
    }
  }
};

console.log(guessRemain);
