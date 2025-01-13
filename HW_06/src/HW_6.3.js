function camelCase(str) {
    if (str.length === 0) return str;
    let result = str[0].toLowerCase();
    for (let i = 1; i < str.length; i++) {
        const char = str[i];

        if (char === ' ') {
            result += str[i + 1].toUpperCase();
            i++;
        } else {
            result += char.toLowerCase();
        }
    }
    return result;
}

const inputString = prompt('Введіть рядок:');
const result = camelCase(inputString);

alert(`Результат у форматі camelCase: ${result}`);
console.log(`Результат у форматі camelCase: ${result}`);