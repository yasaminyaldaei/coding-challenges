function sumSquareDifference(n) {

  let sumOfSquares = 0;
  let sumOfn = 0

  for (let i = 1; i <= n; i++) {
    sumOfSquares += Math.pow(i, 2)
    sumOfn += i
  }

  return Math.pow(sumOfn, 2) - sumOfSquares;
}

sumSquareDifference(100);