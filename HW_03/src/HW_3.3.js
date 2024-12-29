const N = +prompt ('Введіть число')

if (isNaN(N) || N <= 0) {
    console.log('Введіть коректне значення')
}
else {
    const lastNumber = N % 10 // Остання цифра числа
    const lastTwoNumbers = N % 100 // Останні 2 цифри числа
    if (lastNumber === 1 && lastTwoNumbers !== 11) {
        console.log(`Вам ${N} рік`) // Отримуємо "рік". Якщо остання цифра 1, але число не є 11, наприклад 21, 31.
    } 
    else if ((lastNumber === 2 || lastNumber === 3 || lastNumber === 4) && !(lastTwoNumbers === 12 || lastTwoNumbers === 13 || lastTwoNumbers === 14)) {
        console.log(`Вам ${N} роки`) // Отримуємо "роки". Якщо остання цифра введенного числа 2,3,4, але число не є 12,13,14, наприклад 22,23.
    } 
    else {
        console.log(`Вам ${N} років`) // Отримуємо "років" У всіх інших випадках
    }
}
