function babbage(babbageNum, endDigits) {
  let currentPrefix = 0;
  let currentNum = Math.sqrt(generateNumber(currentPrefix, endDigits));


  while (!Number.isInteger(currentNum)) {
    currentPrefix++;
    currentNum =  Math.sqrt(generateNumber(currentPrefix, endDigits));
  }

  return currentNum;
}

function generateNumber(prefix, end) {
  return +("" + prefix + end)
}
