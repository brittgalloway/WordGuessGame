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

// the array of blank spaces that will be filled will _ where movies letters would be
let fullWord = [];
for (let letters = 0; letters < movies.length; letters++) {
  fullWord[letters] = "_";
}
let remainingLetters = movies.length;
console.log(remainingLetters);

// generates a random word from the movies array when any key is pushed
document.onkeyup = function(event) {
  if (event.key) {
    let computerMovie = movies[Math.floor(Math.random() * movies.length)];
    console.log(computerMovie);
  }
};
// playable functions/code goes here
while (remainingLetters > 0) {
  // have player guess
  // show if guess is right or wrong
  // If if right, the letter appears in approperate spots
  // if wrong, the letter appears on the screen and "guesses remaining " decreases by 1
  // if guess get to 0 game over
}
