function numberOfNames(num) {
  let result = 1;
  for (let i = 1; i < num; i++) {
    if (num - i >= 1) {
      result += numberOfNames(num - i);
    }
  }
  return result;
}

console.log(numberOfNames(3));
