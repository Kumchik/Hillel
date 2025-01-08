

// if (true) {
//         //block 1
//         if (true) {
//         //block 5
//         }
//     else if (true) {
//         //block 2        
//     }
//     else if (true) {
//         //block 3
//     }
// }


// let fruit = 'orange';

// switch (fruit) {
// 	case 'apple': {
//         console.log ('apple');
//         break;
//     }
// 	case 'orange': {
//         console.log ('orange');
//         break;
//     }
// 	default:
// 		console.log ('some fruit');
// }




// Помилки:
// 2xx - ok: 200, 204.
// 3xx - redirects: 301, 302.
// 4xx - client error: 403, 404, 405
// 5xx - server error: 500, 501, 502, 503


// const response = 200;

// if (response === 200) {
//     console.log ("ok")
// }
// if (response === 204) {
//     console.log ("ok")
// }
// if (response === 301) {
//     console.log ("redirects")
// }
// if (response === 501) {
//     console.log ("server error")
// }

// АБО

// const response = 502;

// switch (response) {
//     case 200:
//         console.log('apple');
//         break;
//     case 301:
//     case 302:    
//         console.log('redirect');
//         break;
//     case 403:
//     case 404:
//     case 405:
//         console.log('client error');
//         break;  
//     case 501:
//     case 500:
//     case 502:
//     case 503:       
//         console.log('server error');
//         break;         
//     default:
//         console.log('unknown error');
// }


/* РАЗБОР ДЗ 3
const N = +prompt ('Введіть кількість років: ')

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

АБО
*/

// const N = +prompt ('Введіть кількість років: ')
// console.log('N > ', N);

// let ending = '';

// if (N >= 5 && N <= 20) {
//     ending = 'років';
// } else if (N % 10 === 1) {i
//     ending = 'рік'; 
// } else if (N % 10 >= 5 && N % 10 <= 9 || N % 10 === 0) {
//     ending = 'років';
// } else if (N % 10 >= 2 && N % 10 <= 4); {
//     ending = 'роки';
// }

// console.log("Вам" + N + ' ' + ending);




// Цикли

// console.log('Loop')
// console.log('Loop')
// console.log('Loop')
// console.log('Loop')
// console.log('Loop')
// console.log('Loop')
// console.log('Loop')
// console.log('Loop')
// console.log('Loop')


// for -  - цикл з лічильником
// while - Цикл з умовою

// for (init; condition; step)

// let k = 0;

// // k++; 
// // k = k + 1; //1       // Енкремент и декремент
// // k = k + 2; //2

// const end = +prompt ('Enter loop end: ');
//    for (let i = 0; i < end; i = i + 2) {
//        console.log('Loop ', i)
// }




//factorial
// 5! = 1 * 2 * 3 * 4 * 5; - це факторіал

// const N = +prompt('Enter number: ');
// // N!

// let factorial = 1;

// for (let i = 1; i <= N; i++){
//     factorial = factorial * 1;
// }

// console.log('factorial > ', factorial);


// ОПЕРАТОРИ

// break
// continue

// for (let i = 0; i < 7; i++) {
//     if (i === 2 || i === 5) {
//     continue;    
// }
//     console.log ('i > ', i);
// }

// for (let i = 0; i < 4; i++) {
//     for (let k = 0; k < 4; k++) {
//     console.log ('i > ', i, 'k >', k);
//     }
// }



/*
HOMEWORK

1
Просте число - коли воно ділиться тільки на 1 та на самого себе
Складне число - 

3
const cristmasTree = 4
 
   *
  ***
 *****
*******

Нужно построить елку
*/