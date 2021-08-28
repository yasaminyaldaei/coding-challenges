function isBalanced(str) {
  let opening = 0;

  for (const char of str) {
    if (char === "[") {
      opening++;
    } else if (char === "]") {
      if (opening > 0) {
        opening--;
      } else {
        return false;
      }
    }
  }

  return opening === 0 ? true : false;
}
