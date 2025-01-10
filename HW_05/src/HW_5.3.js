alert ('Розрахунок НСД двох чисел');

const num1 = +prompt ('Введіть перше число');
const num2 = +prompt ('Введіть друге число');

function findGCD (a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp
    }
    return a;
}

const result = findGCD (num1, num2);
console.log ('result > ', result);

