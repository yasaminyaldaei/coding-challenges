function largestPrimeFactor(number) {
  let prime = 2,
    max = 1,
    temp = number;

  while (prime <= temp) {
    if (temp % prime === 0) {
      max = prime;
      temp = temp / prime;
    } else {
      prime++;
    }
  }

  return max;
}

// largestPrimeFactor(2) should return a number.
console.log(typeof largestPrimeFactor(2) === "number");

// largestPrimeFactor(2) should return 2.
console.log(largestPrimeFactor(2) === 2);

// largestPrimeFactor(3) should return 3.
console.log(largestPrimeFactor(3) === 3);

// largestPrimeFactor(5) should return 5.
console.log(largestPrimeFactor(5) === 5);

// largestPrimeFactor(7) should return 7.
console.log(largestPrimeFactor(7) === 7);

// largestPrimeFactor(8) should return 2.
console.log(largestPrimeFactor(8) === 2);

// largestPrimeFactor(13195) should return 29.
console.log(largestPrimeFactor(13195) === 29);

// largestPrimeFactor(600851475143) should return 6857.
console.log(largestPrimeFactor(600851475143) === 6857);
