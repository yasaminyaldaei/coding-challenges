function canMakeWord(word) {
  let blocks = [
    "B-O",
    "X-K",
    "D-Q",
    "C-P",
    "N-A",
    "G-T",
    "R-E",
    "T-G",
    "Q-D",
    "F-S",
    "J-W",
    "H-U",
    "V-I",
    "A-N",
    "O-B",
    "E-R",
    "F-S",
    "L-Y",
    "P-C",
    "Z-M",
  ];

  const wordCharacters = word.toLowerCase().split("");

  for (const i in wordCharacters) {
    const index = blocks.findIndex((char) =>
      char.toLowerCase().split("-").includes(wordCharacters[i])
    );
    if (index === -1) {
      return false;
    } else {
      blocks.splice(index, 1);
    }
  }

  return true;
}

// canMakeWord should be a function.
console.log(typeof canMakeWord === "function");

// canMakeWord should return a boolean.
console.log(typeof canMakeWord("bark") === "boolean");

// canMakeWord("bark") should return true.
console.log(canMakeWord("bark") === true);

// canMakeWord("BooK") should return false.
console.log(canMakeWord("BooK") === false);

// canMakeWord("TReAT") should return true.
console.log(canMakeWord("TReAT") === true);

// canMakeWord("COMMON") should return false.
console.log(canMakeWord("COMMON") === false);

// canMakeWord("squAD") should return true.
console.log(canMakeWord("squAD") === true);

// canMakeWord("conFUSE") should return true.
console.log(canMakeWord("conFUSE") === true);
