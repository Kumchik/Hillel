const N = +prompt ('Введіть число')

if (isNaN(N) || N <= 1) {
    console.log('Введіть коректне значення')
} else if (N % 2 !== 0 && N % N === 0 || N === 2) {
    console.log(`Число ${N} є простим числом`)
} else {
    console.log(`Число ${N} не є простим числом`)
}