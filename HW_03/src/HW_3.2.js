const year = +prompt ('Введіть дату')


if (isNaN(year) || year <= 0){
    console.log('Введіть коректне значення')
}
else if ((year % 4 === 0 && year % 100 !== 0) || year % 400 ===0) {
    console.log(`${year} рік високосний`)
}
else {
    console.log(`${year} рік не високосний`)
}
// if (isNaN(year) || year <= 0) - це для того, щоб користувачеві вискакувало повідомлення, якщо він введе не корректне значення (строку, або від'ємне значення)
// Використовував зворотні дужки в поєднанні з "${year}" для того, щоб в консолі виводився введений користувачем рік