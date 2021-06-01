function smallestMult(n) {

  let factor = 2;
  let answer = n;

  while (true) {
    answer = n * factor;
    for (let i = n - 1; i > 1; i--) {
      if (answer % i !== 0) {
        factor++;
        break;
      } else {
        if (i === 2) {
          return answer;
        }
      }
    }
  }

  return true;
}

smallestMult(20);