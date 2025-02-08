function counter(startValue, step) {
    let current = startValue;

    function count() {
        current += step;
        return current;
    }

    count.increment = function () {
        current += step;
        return current;
    };

    count.decrement = function () {
        current -= step;
        return current;
    };

    count.reset = function () {
        current = startValue;
        return current;
    };

    return count;
}

const myCounter = counter(10, 2);

console.log(myCounter());       
console.log(myCounter());       
console.log(myCounter.increment());
console.log(myCounter.decrement());
console.log(myCounter.reset());