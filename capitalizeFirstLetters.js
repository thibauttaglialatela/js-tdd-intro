const assert = require("assert");

//Fonction
const capitalizeFirstLetters = (sentence) => {
  console.log(sentence);
  sentence.trim();
  if (sentence.length > 0) {
    return sentence
      .split(" ")
      .map((word) => {
        return word[0].toUpperCase() + word.substring(1);
      })
      .join(" ");
  } else {
    return "";
  }
};

//écriture des tests
assert.strictEqual(capitalizeFirstLetters(""), "");
assert.strictEqual(
  capitalizeFirstLetters("i am learning TDD"),
  "I Am Learning TDD"
);
assert.strictEqual(capitalizeFirstLetters("javascript"), "Javascript");
