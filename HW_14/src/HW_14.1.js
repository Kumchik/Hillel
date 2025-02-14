function Student(name, surname, birthYear, course) {
    this.name = name;
    this.surname = surname;
    this.birthYear = birthYear;
    this.courses = {};
    
    this.addCourse(course);
}

// Додавання нового курсу
Student.prototype.addCourse = function(course) {
    if (!this.courses[course]) {
        this.courses[course] = { grades: [], attendance: [] };
    }
};

// Видалення курсу
Student.prototype.removeCourse = function(course) {
    delete this.courses[course];
};

// Додавання оцінки
Student.prototype.addGrade = function(course, grade) {
    if (this.courses[course]) {
        this.courses[course].grades.push(grade);
    }
};

// Додавання відвідування
Student.prototype.addAttendance = function(course, attended) {
    if (this.courses[course]) {
        this.courses[course].attendance.push(attended);
    }
};

// Отримання середньої оцінки
Student.prototype.getAverageGrade = function(course) {
    if (!this.courses[course]) return null;
    let grades = this.courses[course].grades;
    return grades.length ? (grades.reduce((sum, g) => sum + g, 0) / grades.length).toFixed(2) : 0;
};

// Отримання середньої відвідуваності
Student.prototype.getAttendanceRate = function(course) {
    if (!this.courses[course]) return null;
    let attendance = this.courses[course].attendance;
    return attendance.length ? (attendance.filter(a => a).length / attendance.length).toFixed(2) : 0;
};

// Отримання кількості занять
Student.prototype.getTotalClasses = function(course) {
    return this.courses[course] ? this.courses[course].attendance.length : 0;
};

// Отримання загальної інформації про студента
Student.prototype.getInfo = function() {
    return {
        name: this.name,
        surname: this.surname,
        birthYear: this.birthYear,
        courses: Object.keys(this.courses)
    };
};

function Group() {
    this.students = [];
}


// Додавання студента
Group.prototype.addStudent = function(student) {
    this.students.push(student);
};

// Видалення студента
Group.prototype.removeStudent = function(student) {
    this.students = this.students.filter(s => s !== student);
};

// Рейтинг за оцінками
Group.prototype.getRankingByGrade = function(course) {
    return [...this.students]
        .map(student => ({
            student: student.name + " " + student.surname,
            avgGrade: student.getAverageGrade(course)
        }))
        .sort((a, b) => b.avgGrade - a.avgGrade);
};

// Рейтинг за відвідуваністю
Group.prototype.getRankingByAttendance = function(course) {
    return [...this.students]
        .map(student => ({
            student: student.name + " " + student.surname,
            attendance: student.getAttendanceRate(course)
        }))
        .sort((a, b) => b.attendance - a.attendance);
};



const student1 = new Student("Alice", "Brown", 2000, "Math");
student1.addGrade("Math", 90);
student1.addGrade("Math", 85);
student1.addAttendance("Math", true);
student1.addAttendance("Math", false);
student1.addAttendance("Math", true);

const student2 = new Student("Bob", "Smith", 1999, "Math");
student2.addGrade("Math", 78);
student2.addGrade("Math", 82);
student2.addAttendance("Math", true);
student2.addAttendance("Math", true);
student2.addAttendance("Math", true);

const group = new Group();
group.addStudent(student1);
group.addStudent(student2);

console.log("Рейтинг за успішністю (Math):", group.getRankingByGrade("Math"));
console.log("Рейтинг за відвідуваністю (Math):", group.getRankingByAttendance("Math"));