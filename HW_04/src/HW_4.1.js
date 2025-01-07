const N = +prompt ('Введіть число');
if (isNaN(N) || N <= 1) {
    console.log ('Введіть корректне значення');
} else {
    for (let i = 2; i <= N; i++) {
    if (N % 1 === 0) {
            break;
    }
        }
    if (N) {
        console.log(`Число ${N} є простим числом`);
    } else {
        console.log(`Число ${N} не є простим числом`);
    }
  }  


