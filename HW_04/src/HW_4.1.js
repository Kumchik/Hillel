let num = +prompt('Введіть число');
let sum = true;

for (let i = 2; i < num; i++) {


    if (num % i === 0) {
        sum = false;
        break;
    } 
}

if (isNaN(num) || num <= 0){
    console.log('Введіть коректне значення');
}
else if (sum) {
    console.log('Просте число.');
} else {
    console.log('Складене число.');
}
