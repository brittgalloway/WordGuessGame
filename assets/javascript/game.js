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
// words randomly choosen
let computerMovie = movies[Math.floor(Math.random() * movies.length)];
console.log(computerMovie);
//Make guess into array for easy checking (each word is array, the letters are the index)
let movieChoiceArray = computerMovie.split("");
console.log(movieChoiceArray);
//   console.log(answerArray);
// Create new span
let span = movieChoiceArray["_"];
// give span underscore as textContent

// give attribute to span that contains letter

document.getElementById("blanks").appendChild(span);

// // append span to some div
// }
// let remainingLetters = computerMovie.length;
// prints (_) on screen
// document.getElementById("blanks").innerHTML = answerArray;
// game play
// while (remainingLetters > 0) {
// document.getElementById("blanks").innerHTML = answerArray.join("");
// have player guess

// show if guess is right or wrong
// If if right, the letter appears in approperate spots
// if wrong, the letter appears on the screen and "guesses remaining " decreases by 1
// if guess get to 0 game over
// }

// ---------------------------
// potentially discarded code

// key is pushed, check it against the spans in the word
// document.onkeyup = function(event) {
//   const userKey = event.key;
//   const isLetterTrue = computerMovie.includes(userKey);
//   // if true letter appears
//   if (isLetterTrue) {
//   } else {
//     //your wrong, letter apears on screen, guesses remaining decreases by 1
