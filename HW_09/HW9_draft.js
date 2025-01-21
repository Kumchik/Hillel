//ES6


/*
function sum (a, b) {
    return a + b;
}

const sum = (a, b) => a + b;

console.log(sum(2, 4));
*/



//function declaration
/*
function sumExpression (a, b) {
    return a + b;
}
*/



//
/*
const students = [
    {name: "Alice", age: 20, grade: 4.5},
    {name: "Bob", age: 21, grade: 3.9},
    {name: "Oliver", age: 19, grade: 4.8},
];

let totalSum = 0;

students.forEach (students => totalSum += students.grade);
console.log(totalSum / students.length);
*/



//
/*
const numbers = [2, 4, 6, 8, 10];

const isOdd = numbers.every (item => {
    const result = item % 2 === 0;
    return result;
});

console.log( ('isOdd >', isOdd));
*/



//
/*
const students = [
    {name: "Alice", id: 20},
    {name: "Bob", id: 21},
    {name: "Oliver", id: 19},
];

const studentsToObject = students.reduce (
    (studObj, student) => {
        studObj [student.id] = student.name;

        return studObj;
    },

);
console.log('studentsToObject >', studentsToObject);
*/



// Сортування масиву

/*
const numbers = [23, 14, 0.6, 99, 10];
console.log('numbers >', numbers);

numbers.sort((a, b) => {
    return a - b;
});

console.log('numbers >', numbers);
*/



//
/*
const data = [
    {name: "Alice", faculty: 'Math'},
    {name: "Bob", faculty: 'IT'},
    {name: "Oliver", faculty: 'Math'},
];

const groupedStudents = Object.groupBy (
    data,
    student => {
        return student.faculty;
    }
);
console.log(data);
console.log(groupedStudents);
*/



// Бульбашкове сортування
/*
const nums = [10, 4, 9, 6, 8, 3];

console.log('nums > ', nums);

for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length - i; j++) {

        if (nums [j] > nums [j + 1]) {
            const temp = nums [j];

            nums [j] = nums [j + 1];

            nums [j + 1] = temp;
        }
    }
}

console.log('nums > ', nums);
*/


//ДЗ

//1 за допомогою фильтра
//2 
//3