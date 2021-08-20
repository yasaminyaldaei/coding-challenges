function primeSummation(n) {
  let sum = 0;
  for (let i = 2; i < n; i++) {
    if (isPrime(i)) sum += i;
  }

  return sum;
}

function isPrime(n) {
  const threshold = Math.floor(Math.sqrt(n));

  for (let i = 2; i <= threshold; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;

}

primeSummation(2000000);
