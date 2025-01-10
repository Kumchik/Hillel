const input = prompt("Введіть будь-яке значення: ");

function reverseString(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}
const result = reverseString(input);
console.log("Перевернутий рядок:", result);