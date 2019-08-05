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
let computerMovie = movies[Math.floor(Math.random() * movies.length)];
// the array of blank spaces that will be filled will _ where movies letters would be
let answerArray = [];
for (let index = 0; index < computerMovie.length; index++) {
  answerArray[index] = "_";
}
let remainingLetters = computerMovie.length;
console.log(remainingLetters);
// prints (_) on screen
document.getElementById("blanks").innerHTML = answerArray;
// while (remainingLetters > 0) {}
// generates a random word from the movies array when any key is pushed
// document.onkeyup = function(event) {
//   if (event.key) {
//     computerMovie = movies[Math.floor(Math.random() * movies.length)];
//     console.log(computerMovie);
//     document.getElementById("blanks").innerHTML = computerMovie;
//     document.getElementById("score").innerHTML = remainingLetters;
//   }
// };
// playable functions/code goes here

// while (remainingLetters > 0) {
// have player guess
// show if guess is right or wrong
// If if right, the letter appears in approperate spots
// if wrong, the letter appears on the screen and "guesses remaining " decreases by 1
// if guess get to 0 game over
// }
