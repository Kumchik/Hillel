function isPalindrome(str) {
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            return false;
        }
    }
    return true; 
}
const input = prompt("Перевірка на паліндром:");
if (isPalindrome(input)) {
    console.log(`"${input}" є паліндромом.`);
} else {
    console.log(`"${input}" не є паліндромом.`);
}