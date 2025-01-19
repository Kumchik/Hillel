/*
const arrStrings = ['string1', 'string2', 'string3'];
const joinedArray = arrStrings.join('-');
console.log(joinedArray);
*/



/*
const testString = 'Hello, world';
const splittedString = testString.split(' ');
console.log('splittedString', splittedString);
*/



/*
const arrStrings = ['string1', 'string2', 'string3'];
console.log(arrStrings[0]);
console.log(arrStrings.at(0));

console.log(arrStrings[arrStrings.length - 1]);
console.log(arrStrings.at(-1));

console.log(arrStrings.at(-3));
console.log(arrStrings.at(3));
*/



// Об'єднання масивів
/*
const arrStrings1 = ['string1', 'string2', 'string3'];
const arrStrings2 = ['string11', 'string22', 'string33'];
const arrStrings3 = ['string134', 'string22342', 'string3234'];

const unitedArray = arrStrings1.concat (arrStrings2, arrStrings3, [3, 5]);

console.log(unitedArray);

const unitedArraySpread = [arrStrings1, arrStrings2];

console.log(unitedArraySpread);
*/



//Array.fill (value, start, end);



// Заповнення масивів
/*
const emptyArray = [];
emptyArray.length = 10;

emptyArray.fill ('Hello', 0, 5);
emptyArray.fill ('some value', 5, 10);
console.log(emptyArray);
*/



// Додавання і видалення елементів з кінця
/*
const stackArray = [5, 8, 9, 4];

stackArray.push(10);
stackArray.push(15);
console.log(stackArray);

stackArray.pop ();
stackArray.pop ();
stackArray.pop ();
console.log(stackArray);
*/



// Додавання і видалення елементів з початку 
/*
const queueArray = [5, 8, 9, 4];

queueArray.unshift(10, 15);
console.log(queueArray);

queueArray.shift ();
queueArray.shift ();
queueArray.shift ();
console.log(queueArray);
*/



//
/*
const arr = [];
arr[arr.length] = 5;
arr.push(34);

console.log(arr);
*/



//
/*
const arr = [1, 8, 9, 4, 5];
console.log(arr);
const slicedArray = arr.slice (1,3);
console.log(slicedArray);
*/



// Двовимірний масив та Вкладені for
/*
const teatArray = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
]; //flat

for (let i = 0; i < teatArray.length; i++) {
    for (let j = 0; j < teatArray[i].length; j++) {
        console.log(teatArray[i][j]);
    }
}
*/



//
/*
const teatArray = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
]; //flat
const flatAttay = teatArray.flat();

console.log(teatArray);
console.log(flatAttaylatAttay);
*/



// Мутабельний массив, коли початковий масив змінився
/*
const sourceArray = [1, 8, 9, 4, 5];
console.log(sourceArray);

sourceArray.push(100);
console.log(sourceArray);
*/

/*
const testArr = [];
let promptValue;

while (promptValue !== null) {
    promptValue = prompt ('Enter value:');
    testArr.push(promptValue);

    if (promptValue !== null) {
        testArr.push(promptValue);
    }
}


console.log('testArr >', testArr);
*/



// ДЗ
// 1
// Таке як camelCase 