function padString(str, length, symbol, toLeft = false) {
    if (str.length >= length) {
        return str;
    }

    let paddingLength = length - str.length;
    let padding = '';

    for (let i = 0; i < paddingLength; i++) {
        padding += symbol;
    }
    return toLeft ? padding + str : str + padding;
}
const str = prompt('Введіть рядок:');
const length = +prompt('Введіть бажану довжину рядка:');
const symbol = prompt('Введіть символ для доповнення:');
const toLeft = confirm('Додавати символи зліва? (OK - так, Cancel - ні)');

const result = padString(str, length, symbol, toLeft);
alert(`Результат: ${result}`);
console.log(`Результат: ${result}`);