function amicablePairsUpTo(maxNum) {
    let result = [];
    // error: stored only the latest computed value, not a history of values
    let values = [];
    let temp = 0;
    let index = 0;
  
    // error: started from 1
    for (let i = 2; i < maxNum; i++) {
      temp = getPropDivs(i)
              .reduce((a, b) => a + b)
    
    // error: misunderstanding the problem, comparing the item.sum with temp not i
    // error: not considering that the sum and num properties are not available in the first iteration
      index = values.findIndex(item => i === item?.sum && temp === item?.num)
  
      // error: if (index) instead of (index !== -1)
      if (index !== -1) {
        result.push([values[index].num, i]);
      }
  
      values.push({
        num: i,
        sum: getPropDivs(i)
              .reduce((a, b) => a + b)
      })
    }
  
  
  
    return result;
  }
  
  // error: started from one
  function getPropDivs(n) {
    const result = [1];
    const upper = Math.sqrt(n);
  
    for (let i = 2; i < upper; i++) {
      if (n % i === 0) {
        result.push(i);
        result.push(n / i);
      }
    }
    return result;
  }