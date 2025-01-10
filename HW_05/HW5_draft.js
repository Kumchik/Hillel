/*
function output (text) {
    console.log ('**********************');
    console.log ('*****' + text + '*****');
    console.log ('**********************');
}
*/

/*
function returnValue () {
    console.log ('***********');
    const part1 = 'String';
    const part2 = '123';
    console.log ('*****')

    return part1 + ' ' + part2;
}

const someValue = returnValue ();

console.log (someValue);
*/


/*
const globalMessage = 'Some message';
let someNumber = 15;

console.log (someNumber);

function vars () {
    const greeting = 'I am'

    someNumber = 1000

    console.log (greeting);
    console.log (globalMessage);
    console.log (someNumber);

}

console.log (someNumber)

vars()
*/



/*
const a = 5;
const b = 6;
const result = a + b;

console.log (result);
*/


/*
function sum (a, b) { //формальниі параметри
    const result = a + b;

    return result;
}

sum (12, 5); // фактичні параметри

console.log (sum(5, 6));
*/





/*
function sayHello (userName) {
    const message = 'Привіт, ' + userName;

    console.log (message);
}

sayHello ('Roman');
sayHello ('Ihor');

АБО

function sayHello (userName) {
    const message = 'Привіт, ' + userName;

    return message;
}

const uName1 = sayHello ('Roman');
const uName2 = sayHello ('Ihor');

console.log (sayHello ('Roman'));
console.log (sayHello ('Ihor'));
*/



/*
function sum (first, second = 5) { // Якщо через = то це необов'язкові параметри (second = 5)
    const result = first + second;
    
    return result;
}

const result = sum (3, 10);

console.log ('result > ', result);
*/



/*
// Чи число будедодатне чи від'ємне

function isPositive (num) {

    if (num > 0) {
        return 'Додатне';
    } else {
        return 'Від`ємне'
    }
    
}

const result = isPositive (5);
console.log (result);
*/



//***************************************************************************


// ДЗ 5 Функции

/*
1 Делаем через функции

// 'stroka' => 'akorts'
/*
function reverseString (str) {

    let x = ' ';

    for (let i = str.length; i > 0; i--){
        console.log (str[i]);

        str [i]
    }

    return 'akorts';

 }
const result = reverseString ('stroka');

console.log (result);
*/


/*
2 Делаем через функции. Можно вызывать функцию внутри функции.

/*
function isPalindrome (str) {

}

const result = isPalindrome ('str');

console.log('result > ', result)
*/


/*
3

function findGCD (a,b) {
    //..
    return X;
}

const result = findGCD (4, 6);
console.log ('result > ', result);
*/



function print(word) {
    console.log(word);
    console.log('!');
}

function add (x, y) {
    let res = x + y;
}


print('Hello');