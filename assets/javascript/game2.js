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
  // Declare random movie to be set on start

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
      //   console.log(answerArray);
    }
    let score = 0;
  }
  // if key pressed....

  if (keypress) {
    // console.log(computerMovie);

    // says how many (_) on screen based on given word
    let remainingLetters = computerMovie.length;
    let guessLeft = 5;
    // prints the mystery word

    document.getElementById("blanks").textContent = answerArray.join(" ");
    // Display starting amount of guesses
    guessElement.textContent = "Remaining Gesses: " + guessLeft;
    // if there are more than 0 letters to guess per word/title
    // if (remainingLetters > 0) {
    // user guess on keyup
    let userGuess = keypress;
    // loop for choosen word
    for (var key = 0; key < remainingLetters; key++) {
      // if user choice is correct
      guessLeft = 5;
      if (computerMovie[key] === userGuess) {
        answerArray[key] = userGuess;

        // Show the player their progress

        blanksElement.textContent = answerArray.join(" ");
        guessElement.innerHTML = "Remaining Guesses: " + guessLeft;
        //   if the guess is wrong
      }
    }
    if ([key] !== userGuess) {
      //  guesses remaing goes down by 1
      guessLeft -= 1;
      // and prints
      guessElement.innerHTML = "Remaining Guesses: " + guessLeft;
    }
    //  else if (remainingLetters == 0 && guessLeft > 0) {
    //   // increase score by 1 (for 1 full word spelled)
    //   score++;
    //   // prints score to screen
    //   scoreElement.textContent = "Score " + score;

    //   // congratulate player and encourge them to continue

    //   document.getElementById("win").textContent =
    //     "You solved it! Can you beat them all?";
    //   //       console.log(score);
    //   // if you beat all 11 words
    // } else score == 11;
    // {
    //   //       // print celebratory text
    //   document.getElementById("win").textContent = "YOU BEAT THEM ALL!";
    // }
    // //   if you run out of guesses and lose
    // else guessLeft == 0 {
    //   guessElement.textContent = "Remaining Guesses: " + guessLeft;
    //   // prints message for loss
    //   document.getElementById("lose").innerHTML =
    //     "Sorry, you lose. Want to try another movie title?";
    //   if you run out of letters to guess(you fill all the spaces and win)
  }
};
