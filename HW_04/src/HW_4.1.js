const num = +prompt ('Enter num: ')

for (let i = 2; i <= num; i++) {
    // console.log (num, '-', i, '-', num % i);

    if (num % i === 0) {
        console.log ('Просте');
        break;
    }

    console.log (i);
}






// if (isNaN(N) || N <= 1) {
//     console.log('Введіть коректне значення')
// } else if (N % 2 !== 0 && N % N === 0 || N === 2) {
//     console.log(`Число ${N} є простим числом`)
// } else {
//     console.log(`Число ${N} не є простим числом`)
// }