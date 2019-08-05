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
// generates a random word from the movies array when any key is pushed
document.onkeyup = function(event) {
  if (event.key) {
    let computerMovie = movies[Math.floor(Math.random() * movies.length)];
    console.log(computerMovie);
  }
};
