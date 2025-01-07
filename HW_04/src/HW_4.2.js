const N = +prompt("Введіть число ");

if (isNaN(N)|| N <= 1 ) {
  console.log("Введіть число більше 1");
} else {
  console.log(`Досконалі числа от 1 до ${N}:`);

  for (let num = 1; num <= N; num++) {
    let sum = 0;

    // Знаходимо дільники чисел і рахуємо їхню суму
    for (let i = 1; i <= num / 2; i++) {
      if (num % i === 0) {
      sum += i;
      }
    }

    // Перевіряємо, чи є число досконалим
    if (sum === num) {
      console.log(num);
    }
  }
}