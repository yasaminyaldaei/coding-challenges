function largestPalindromeProduct(n) {
  let product = 1;
  let result = [];

  for (let i = Math.pow(10, n) - 1; i >= Math.pow(10, n - 1); i--) {
    for (let j = Math.pow(10, n) - 1; j >= Math.pow(10, n - 1); j--) {
      product = i * j;
      if (product.toString().split("").reverse().join("") == product) {
        result.push(product);
        break;
      }
    }
  }
  return Math.max(...result);
}

console.log(largestPalindromeProduct(3));

// largestPalindromeProduct(2) should return a number.
console.log(typeof largestPalindromeProduct(2) === "number");

// largestPalindromeProduct(2) should return 9009.
console.log(largestPalindromeProduct(2) === 9009);

// largestPalindromeProduct(3) should return 906609.
console.log(largestPalindromeProduct(3) === 906609);
