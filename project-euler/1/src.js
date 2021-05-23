function multiplesOf3and5(number) {
  const range = new Array(number - 1).fill(0);
  return range.reduce((acc, _, index) =>
    (index + 1) % 3 === 0 || (index + 1) % 5 === 0 ? acc + index + 1 : acc
  );
}

console.log(multiplesOf3and5(10));
