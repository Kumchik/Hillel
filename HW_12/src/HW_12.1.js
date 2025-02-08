function summarize(num) {
    return function (arg = 1) {
        return num + arg;
    };
}

const addFive = summarize(5);

console.log(addFive(3));
console.log(addFive());