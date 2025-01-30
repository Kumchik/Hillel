function sqr(x, cache) {
    if (cache.has(x)) {
       
        console.log(`Fetching from cache: ${x}^2 = ${cache.get(x)}`);
        return cache.get(x);
    } else {
       
        const square = x * x;
        cache.set(x, square);
        console.log(`Calculating and caching: ${x}^2 = ${square}`);
        return square;
    }
}

const cache = new Map();

console.log(sqr(5, cache)); 
console.log(sqr(5, cache)); 
console.log(sqr(7, cache)); 
console.log(sqr(7, cache)); 
console.log(sqr(3, cache));