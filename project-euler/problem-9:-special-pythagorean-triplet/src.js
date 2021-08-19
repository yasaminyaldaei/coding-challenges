function specialPythagoreanTriplet(n) {
    let sumOfabc = n;
    let a, b, c;
    
    for (a = 1; a < n; a++) {
      for (b = a; b < n; b++) {
        c = n - (a + b);
        if (Math.pow(c, 2) === Math.pow(a, 2) + Math.pow(b, 2)) {
          return a * b * c;
        }
      }
    }
   
    return true;
}
   
specialPythagoreanTriplet(1000);