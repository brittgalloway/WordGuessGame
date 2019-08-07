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
  "home"
];
// game starts on key up
document.onkeyup = function(event) {
  const keypress = event.key;
  if (keypress) {
    // words randomly choosen
    let computerMovie = movies[Math.floor(Math.random() * movies.length)];
    console.log(computerMovie);
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
    while (remainingLetters > 0) {
      // user guess
      let userGuess = keypress;
      for (var key = 0; key < computerMovie.length; key++) {
        if (computerMovie[key] === userGuess) {
          answerArray[key] = userGuess;
          remainingLetters--;
          // Show the player their progress
          // console.log(answerArray);
          document.getElementById("blanks").innerHTML = answerArray.join(" ");
        }
      }
    }
  }
};
