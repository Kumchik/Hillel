function validate(sum, validator) {
    return function (...args) {
        if (!args.every(validator)) {
            throw new Error("Validation failed: some arguments are invalid");
        }
        return sum(...args);
    };
}


function sum(...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
}

function isPositiveNumber(n) {
    return typeof n === "number" && n > 0;
}

const validatedSum = validate(sum, isPositiveNumber);

console.log(validatedSum(3, 5, 10));
console.log(validatedSum(2, -5, 7));