function fiboEvenSum(n) {
    let sumOfEven = 0,
        prevFib = 1,
        currentFib = 1;

    while (currentFib <= n) {
        currentFib % 2 === 0 ? sumOfEven += currentFib : null;
        [prevFib, currentFib] = [currentFib, prevFib + currentFib] 
    }
    return sumOfEven;
  }

  console.log(typeof (fiboEvenSum(10)) === "number")
  console.log(fiboEvenSum(10) % 2 === 0)
  console.log(fiboEvenSum(10) === 10)
  console.log(fiboEvenSum(34) === 44)
  console.log(fiboEvenSum(60) === 44)
  console.log(fiboEvenSum(1000) === 798)
  console.log(fiboEvenSum(100000) === 60696)
  console.log(fiboEvenSum(4000000) === 4613732)
