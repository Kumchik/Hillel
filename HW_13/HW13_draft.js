// Рекурсія

/*
function countdoun (i) {
    console.log(i);
    
    if (i === 1) {
        // базовий випадок
        // термінальна гілка
        return;
    } else {
        //рекурсивний випадок
        //рекурсивний виклик
        countdoun (i - 1);
    }
}

countdoun (6);
*/



// Факторіал 

// !5 = 1 * 2 * 3 * 4 * 5;

/*
let fact = 1;

for (let i = 5; i > 1; i--) {
    fact *= i;
}
console.log(fact);

// i === 5 - терміналь 
*/


/*
function factorial (num) {
    if (num === 1) {
        return 1;
    }
    let tempFactorial = num * factorial (num - 1);
    return tempFactorial;
}

const result = factorial (4);
console.log(result);
*/


function traverse (obj) {
    for (let key in obj) {
        if (typeof obj [key] === 'object') {
            traverse (obj [key]);
        } else {
            console.log('key >', key, obj [key]);
            
        }
    }
}

traverse (library);