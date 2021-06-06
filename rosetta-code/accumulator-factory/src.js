function accumulator(sum) {
    return (n) => sum =+ n;
}

const fn = accumulator(3)
console.log(fn(-4))
console.log(fn(1.5))
console.log(fn(5))