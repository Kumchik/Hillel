function logArguments(fn) {
    return function (...args) {
        console.log(`Arguments:`, args);
        return fn(...args);
    };
}

function sum(a, b) {
    return a + b;
}

const decoratedSum = logArguments(sum);

console.log(decoratedSum(6, 8));
console.log(decoratedSum(12, 23, 37));