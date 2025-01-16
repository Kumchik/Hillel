const students = [
	{ name: "Alice", age: 20, grade: 4.5 },
	{ name: "Bob", age: 21, grade: 3.9 },
	{ name: "Charlie", age: 19, grade: 4.8 }
];

function calculateAverageGrade(students) {
    const totalGrade = students.reduce((sum, students) => sum + students.grade, 0);
    const averageGrade = totalGrade / students.length;
    return parseFloat(averageGrade.toFixed(1));
}

console.log(calculateAverageGrade(students));