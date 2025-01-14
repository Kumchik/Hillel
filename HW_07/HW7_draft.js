// 
/*                                Прості типи даних
const num = 5;
const str = 'str';
const nullVar = null;
const undef = undefined;
const bool = true;
*/



//                               Посилальні типи даних
//                                  Cтворюємо Об'ект 
/*
const student = {                  //Властивості
    name: 'John',                  
    secondName: 'Smith',
    age: 19,
    faculty: 'IT',                   
    isStudent: true,
    passedExams: null,
    
    sayHello: function () {        //Метод
        console.log('Hello');
        
    }
};

console.log(student);
*/

/*
const someObject  = {};

const singleObject = {
    key: 'value',
};

const nestedObj = {
    name: 'John2',                  
    secondName: 'Smith2',
    age: 199,

    address: {
        city: 'NY',
        street: 'wall street',
        building: 12,

        someObject: {
        key: 'value',
        }
    }
}
*/



// name - ключ
// "John" - значення



// Переглядаєто об'ект
/*
const student = {                 
    name: 'John',                  
    secondName: 'Smith',
    age: 19,
    faculty: 'IT',                   
    isStudent: true,
    passedExams: null,
    
    sayHello: function () {
        console.log('Hello');
    },

    address: {
        city: 'NY',
        street: 'Wall street',
        building: 12,
        },
};

console.log(student);
console.log(student.name);
console.log(student.age);
console.log(student.faculty);

student.sayHello ();

console.log(student.address.street);
console.log(student.address.building);
*/



// Змінюємо об'ект
/*
const student = {                 
    name: 'John',                  
    secondName: 'Smith',
    age: 19,
    faculty: 'IT',                   
    isStudent: true,
    passedExams: null,
};

console.log(student.age);
student.age = 20;
const averageAge = student.age;
console.log('averageAge >', averageAge);

const - можна надавати нові змінні властивості (student.ege) цієї константи, 
а не саму константу (student).
*/



// Видалення
/*
const student = {                 
    name: 'John',                  
    secondName: 'Smith',
    age: 19,
    faculty: 'IT',                   
    isStudent: true,
    passedExams: null,
};

console.log(student.grade); //undefined
student.grade = 5; // Зазначили змінну
console.log(student.grade);
console.log(student.faculty);
delete student.faculty; // видалення
console.log(student.faculty);
*/



// 
/*
const uniqueKey = Symbol ('test key') // Створення унікального ключа

const student = {                 
    name: 'John',                  
    secondName: 'Smith',
    age: 19,
    faculty: 'IT',                   
    isStudent: true,
    passedExams: null,
    const: 'some value',
    const2: 'some value2',
    'HELLO WORLD': 'HELLO WORLD !!!',
    [uniqueKey]: 'Symbol key',
};

const keyVar = 'HELLO WORLD';

console.log(student);
console.log(student['HELLO WORLD']); //В [] робимо складену функцію

console.log(student[uniqueKey]);
*/



// Что важно знать
//CRUD
//create
// read
// update
// delete



// Деструктуруюче присвоєння
/*
const student = {                 
    name: 'John',                  
    secondName: 'Smith',
    age: 19,
}

// const age = student.age;
// const secondName = student.secondName;
// Або
const {age, secondName} = student;

console.log(age);
*/



// 
/*
const student = {                 
    'name': 'John',                  
    'secondName': 'Smith',
    age: 19,
};

const studentKeys = Object.keys (student);
console.log(studentKeys);
*/



// Массив
/*
const testArr = [1, 2, 3, 4, 5, 6, 8, 9, 10]; //1,2,3,4,5 - елементи масиву 
const strArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'];
const boolArr = [true, false, true, true];
const nullArr = [null, null, null, null];
const mixedArr = [1, 'a', true, null, undefined];

console.log(testArr[3]); // Виводимо елемент                                                                                масиву
*/


/*
// const students = [

{
        age: 17,
        'secondName': 'Smith',
        'name': 'John',
    }
    {
        age: 18,
        'secondName': 'Dou',
        'name': 'Ihor',
    }
    {
            age: 20,
        'secondName': 'Maron',
        'name': 'Dimon',
    }     
]
*/



//
/*
const emptyArr = [123, 125, 436, 675, 844]

console.log(emptyArr);
console.log(emptyArr.length);
*/

// Звернення до елементів
/*
const strArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'];
console.log(strArr[5]);
console.log(strArr[strArr.length - 1]); // Звернення до останього елементу
console.log(strArr[Math.floor(strArr.length / 2)]); // Звернення до середнього елементу
*/



// Перебираємо масив
/*
const strArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'];

for (let i = 0; i < strArr.length; i++) {
    console.log(strArr[i]);
}
*/



//
/*
const strArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'];

let bigStr = '';
for (let i = 0; i < strArr.length; i++) {
    bigStr = bigStr + strArr;
}
console.log(bigStr);
*/



//
/*
const emptyArr = [123, 125, 436, 675, 844, 347, 75, 646, 645];

let sum = 0;
for (let i = 0; i < emptyArr.length; i++) {
    sum = sum + emptyArr[i];
}
console.log('sum >', sum / emptyArr.length);
*/



// Додавання нового елементу в масив
/*
const testArr = ['first', 'second', 'third'];

console.log(testArr);
console.log(testArr[0]);
console.log(testArr[1]);
console.log(testArr[2]);

testArr[1] = 'new value';
console.log(testArr[1]);

testArr[testArr.length] = 'new value1' // Додавання в кінець 
*/



// Додавання з довільних значень в кінець
/*
const newArray = [];
newArray[newArray.length] = 'first';
newArray[newArray.length] = 'second';
newArray[newArray.length] = 'third';

console.log('newArray >', newArray);

newArray[1] = null; // Видалення ключів зі збереженням порядкового номера

console.log('newArray >', newArray);
*/



// ДЗ
// 1

// 2

/*
[1, 5, 2, 4], [1, 7, 2, 9]
[1, 5, 2, 4].includes (6)
*/

// 3 

/*
const students = [
    {
        age: 17,
        'secondName': 'Smith',
        'name': 'John',
    },
    {
        age: 18,
        'secondName': 'Dou',
        'name': 'Ihor',
    },
    {
        age: 20,
        'secondName': 'Maron',
        'name': 'Dimon',
    },     
];

console.log(students);
*/