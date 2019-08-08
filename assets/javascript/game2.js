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
// total starting guesses
let guessLeft = 5;
// Declare random movie to be set on start
let computerMovie = "";
let answerArray = [];
// game starts on key up
document.onkeyup = function(event) {
  // defining elements and things
  // define score element
  const scoreElement = document.getElementById("score");
  // define guess element
  const guessElement = document.getElementById("wguess");
  // define event key
  const keypress = event.key;

  if (keypress === "Enter") {
    // game starts
    // words randomly choosen
    computerMovie = movies[Math.floor(Math.random() * movies.length)];
    console.log(computerMovie);
    // the array of blank spaces that will be filled will _ where movies letters would be
    for (let index = 0; index < computerMovie.length; index++) {
      answerArray[index] = "_";
      //   console.log(answerArray);
    }
  }
  // if key pressed....
  if (keypress) {
    // guessElement.textContent = guessLeft;
    // console.log(computerMovie);
    // says how many (_) on screen based on given word
    let remainingLetters = computerMovie.length;

    // score variable
    let score = 0;
    // prints the mystery word
    console.log(answerArray);
    document.getElementById("blanks").textContent = answerArray.join(" ");
    // if there are more than 0 letters to guess per word/title
    if (remainingLetters > 0) {
      // user guess on keyup
      let userGuess = keypress;
      // loop for choosen word
      for (var key = 0; key < remainingLetters; key++) {
        // if user choice is correct
        if (computerMovie[key] === userGuess) {
          answerArray[key] = userGuess;
          remainingLetters--;
          // Show the player their progress
          console.log(answerArray);
          document.getElementById("blanks").textContent = answerArray.join(" ");
          //   if the guess is wrong
        } else if (computerMovie[key] != userGuess) {
          //         // the blank stays?
          //         answerArray[key] == computerMovie[key];
          //         // guesses remaining (started with 5) goes down by 1
          //         guessLeft--;
          //         // Should print Guess 4 (if this is the 1st incorrect guess)
          //         guessElement.textContent = "Guesses " + guessLeft;
          //         console.log(guessLeft);
        }
      }

      //     //   if you run out of guesses and lose
      //     if (guessLeft == 0) {
      //       guessElement.innerHTML = "Guesses " + guessLeft;
      //       // prints message for loss
      //       document.getElementById("lose").innerHTML =
      //         "Sorry, you lose. Want to try another movie title?";
      //       //   if you run out of letters to guess(you fill all the spaces and win)
      //     } else if (remainingLetters == 0 && guessLeft > 0) {
      //       // increase score by 1 (for 1 full word spelled)
      //       score++;
      //       // prints score to screen
      //       scoreElement.innerHTML = "Score " + score;

      //       // congratulate player and encourge them to continue

      //       document.getElementById("win").innerHTML =
      //         "You solved it! Can you beat them all?";
      //       console.log(score);
      //       // if you beat all 11 words
      //     } else if (score == 11) {
      //       // print celebratory text
      //       document.getElementById("win").innerHTML = "YOU BEAT THEM ALL!";
      //     }
    }
  }
};
