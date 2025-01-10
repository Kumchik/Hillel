/*
const a = 5;
const b = 6;

console.log(a + b);
*/



/*
console.log(Number.isFinite(a));
console.log(Number.isFinite(14));
console.log(Number.isFinite(0));
console.log(Number.isFinite(NaN));
console.log(Number.isFinite(Infinity));
console.log(Number.isFinite(1.14));

console.log(Number.isInteger(1.14));

console.log(Number.isNaN(NaN));
console.log(Number.isNaN(14));
console.log(Number.isNaN(Infinity));

console.log(typeof NaN);
*/



/*
console.log(Number.parseInt('14.5'));  // приймає на себе рядки і перетворює на число
console.log(Number.parseInt('-14.5'));
console.log(Number.parseInt('a10.25'));
console.log(Number.parseInt('20.25px')); // вибирає ціле число
console.log(Number.parseInt('10110111', 2));
*/



/*
console.log(Number.parseFloat('14.5')); Повертає першу цілу чястину рядка і перетворює на number 
console.log(Number.parseFloat('-14.5'));
console.log(Number.parseFloat('a10.25'));
console.log(Number.parseFloat('20.25px')); 
console.log(Number.parseFloat('10110111', 2));
*/



/*
const str = 'Hello World!';

console.log(str.at(1));
console.log(str.at(0));
console.log(str.at(6));

console.log(str.at(-1)); //Починає з кінця
*/



/*
const message = 'Hello World!';
const resultStart = message.startsWith('Hello'); //Перевіряє, чи починається слово на таку букву
const resultEnd = message.endsWith ('!'); // чи закінчується та !.

console.log(resultEnd);
*/



/*
const message = 'Hello World!';

console.log(message.indexOf('o')); //Шукає порядковий номер літери з початку
console.log(message.indexOf('Wor'));

console.log(message.lastIndexOf('Wor')); //Шукає порядковий номер літери з кунця
*/



/*
const message = 'Hello World!';
console.log(message.includes('Hello'));
*/



/*
const num = '12'; //добавляє нулі на початок
console.log(num.padStart(15, '0'));
console.log(num.padEnd(15, '0')); // добавляэ нулі в кінець
*/



/*
// Повторювати символи кулька разів
const stringToRepeat = '*';
console.log(stringToRepeat.repeat(5));
*/



/*
// Зміна індексів
const greeting = 'Hello World!'
let changedGreeting = greeting.replace('Hello', 'Hi')
changedGreeting = changedGreeting.replace ('World', 'Ocean');
console.log(changedGreeting);
*/



/*
// Вирізає індекси
const greeting = 'Hello World!';
const slicedPart = greeting.slice (2, 5);
console.log('slicedPart >', slicedPart);
*/



/*
// Переводить у верхній массив.
const lowerCaseString = 'hello world!';
console.log(lowerCaseString.toUpperCase());
// toUpperCase - в нижній реестр
*/



/*
// Розбиває на символи
const greeting = 'Hello World!';
const splitted = greeting.split('');
console.log('array of chars >', splitted);
*/



/*
// Убирає зайві пробіли
const greeting = '      Hello World!    ';
console.log('', greeting.trim(), '');
*/



// 6 ДЗ


// 1
/*
function doubleLettet(str) {
    for (str) {
        result = result + letter.repeat (2);
    }
    return result;
    
}
*/


// 2 
// 4й параметр = false


// 3
/*
function camelCase (str, separator) {

}

camelCase ('Hello World', ' '); // Hello World => helloWorld

const str = 'Hello World';
*/    