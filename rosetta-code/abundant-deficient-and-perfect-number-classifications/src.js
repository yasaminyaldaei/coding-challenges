function getDPA(num) {
  let result = {
    d: 0,
    p: 0,
    a: 0,
  };
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum = getSumDivisors(i);

    switch (true) {
      case sum < i || i === 1:
        result.d++;
        break;
      case sum === i && i !== 1:
        result.p++;
        break;
      case sum > i:
        result.a++;
        break;
    }
  }

  return Object.values(result);
}

function getSumDivisors(num) {
  let sum = 1;
  for (let j = 2; j < num; j++) {
    if (num % j === 0) {
      sum += j;
    }
  }

  return sum;
}

function arrayEquals(a, b) {
    return Array.isArray(a) &&
      Array.isArray(b) &&
      a.length === b.length &&
      a.every((val, index) => val === b[index]);
}

// getDPA should be a function.
console.log(typeof getDPA === "function");

// getDPA(5000) should return an array.
console.log(typeof getDPA(5000) === "object" && Array.isArray(getDPA(5000)));

// getDPA(5000) return array should have a length of 3.
console.log(getDPA(5000).length === 3);

// getDPA(5000) should return [3758, 3, 1239].
console.log(arrayEquals(getDPA(5000), [3758, 3, 1239]));

// getDPA(10000) should return [7508, 4, 2488].
console.log(arrayEquals(getDPA(10000), [7508, 4, 2488]));

// getDPA(20000) should return [15043, 4, 4953].
console.log(arrayEquals(getDPA(20000), [15043, 4, 4953]));
