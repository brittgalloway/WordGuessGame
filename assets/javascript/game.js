// Listing the words/movies I want to be randomly gerated (hopefully this makes an array)
const numberOfMovies = 11;
let movies = [
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

movies[9] = "rise of the guardians";
movies[10] = "how to train your dragon";
movies[11] = "home";

function PickRandomWord(frm) {
  // Generate a random number between 1 and NumberOfWords
  var rnd = Math.ceil(Math.random() * NumberOfWords);

  // Display the word inside the text box
  frm.WordBox.value = words[rnd];
}
