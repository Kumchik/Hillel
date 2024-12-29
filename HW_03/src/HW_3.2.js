const year = +prompt ('Введіть дату')

if (year % 4 === 0 || year % 400 === 0){
    console.log('Цей рік високосний')
}
else if (year % 100 !== 0) {
    console.log('Цей рік не високосний')
}
else {
    console.log('Цей рік не високосний')
}

