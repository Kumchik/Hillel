//
/*
const student = {
    name: 'SomeName',
    secondName: 'SecondName',
    age: 17,
};



// Структура даних "Словник"
const cityCodes = {
    Kyiv: '044',
    Mykolaiv: '0512',
}

console.log(cityCodes);
console.log(cityCodes.Kyiv);
*/
//map

// const testMap = new Map ();



// CRUD
/*
testMap.set ('key', 'value');
testMap.set ('MK', '0512');
testMap.set ('Kyiv', '044');

console.log('testMap >', testMap);

console.log('testMap >', testMap.get ('Kyiv'));
*/



// CRUD
// Сети не дублюються
/*
const testSet = new Set ();

testSet.add (5);
testSet.add (3);
testSet.add (10);
testSet.add (10);
testSet.add (5);

console.log(testSet);

testSet.add (100);

console.log(testSet);

const hasHundred = testSet.has (100); // Чи є 100

console.log(hasHundred);
console.log(testSet.size); // Розмір нашого сета
*/


/*
const arrToSet = [3, 5, 7, 7, 8, 8];
const strToSet = 'arrToSet';

const testSetWithValue = new Set (strToSet);

console.log(testSetWithValue);
*/

const testSetWithValue = new Set (strToSet);
console.log(testSetWithValue.values());
console.log(testSetWithValue.keys());
console.log(testSetWithValue.entries());

