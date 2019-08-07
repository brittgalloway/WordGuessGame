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
// game starts on key up
document.onkeyup = function(event) {
  const keypress = event.key;
  if (keypress) {
    // words randomly choosen
    let computerMovie = movies[Math.floor(Math.random() * movies.length)];
    // console.log(computerMovie);
    // the array of blank spaces that will be filled will _ where movies letters would be
    let answerArray = [];
    for (let index = 0; index < computerMovie.length; index++) {
      answerArray[index] = "_";
      //   console.log(answerArray);
    }
    let remainingLetters = computerMovie.length;

    // prints (_) on screen
    // console.log(answerArray);
    document.getElementById("blanks").innerHTML = answerArray;
    if (remainingLetters > 0) {
      // user guess
      let userGuess = keypress;
      const scoreElement = document.getElementById("score");
      const guessElement = document.getElementById("wguess");
      let score = 0;
      let guess = 5;

      for (var key = 0; key < computerMovie.length; key++) {
        if (computerMovie[key] === userGuess) {
          answerArray[key] = userGuess;
          remainingLetters--;
          // Show the player their progress
          console.log(answerArray);
          document.getElementById("blanks").innerHTML = answerArray.join(" ");
          //   if the guess is wrong
        } else if (computerMovie[key] != userGuess) {
          guess--;
          guessElement.textContent = "Guesses " + guess;
          console.log(guess);
          //   if you run out of guesses and lose
        } else if (guess == 0) {
          guessElement.innerHTML = "Guesses " + guess;
          getElementById("lose").innerHTML =
            "Sorry, you lose. Want to try another movie title?";
          //   if you run out of letters to guess(you fill all the spaces and win)
        } else if (remainingLetters == 0) {
          score++;

          document.getElementById("blanks").innerHTML = answerArray.join("");
          scoreElement.innerHTML = "Score " + score;
          document.getElementById("win").innerHTML =
            "You solved it! Can you beat them all?";
          console.log(score);
          guess = 0;
        } else if (score == 11) {
          document.getElementById("win").innerHTML = "YOU BEAT THEM ALL!";
        }
      }
    }
  }
};
