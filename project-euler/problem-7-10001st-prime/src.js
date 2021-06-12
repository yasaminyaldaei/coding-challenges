function nthPrime(n) {

  let i = 0;
  let prime = 2;

  while (i != n) {
    if (isPrime(prime)) {
      i++;
    }
    prime++;
  }

  return prime - 1;
}

function isPrime(n) {
  if (n == 1) {
    return false;
  }
  for (let i = 1; i <= Math.floor(Math.sqrt(n)); i++) {
    if (n % i === 0 && i !== 1) {
      return false;
    }
  }

  return true;
}

nthPrime(10001);