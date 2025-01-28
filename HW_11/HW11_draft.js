// Звичайні (не ітеровані)
// Ітеровані типи


/*
// Массив 
const testArr = [4, 65, 7];

for (let elem of testArr) {
    console.log(elem);
}

// Стрінга
const testStr = 'Some string';

for (let elem of testStr) {
    console.log(elem);
}
*/




/*
const range = {
    from: 1,
    to: 6,

    [Symbol.inerator]: function () {
        let current = this.from;
        let last = this.to;

        return {
            next: function () {
                if (current < last) {
                    return {
                        value: current++,
                        done: false
                    }
                } else {
                    return {
                        value: undefined,
                        done: true
                    }
                }
            }
        };
    }
};
*/



//
/*
const myObj = {
    items: [4, 5, 6, 7, 8, 9],


    [Symbol.iterator]: function () {
        let index = 0;
        const myItemsToIterate = this.items;

        return {
            next: function () {
                if (index < myItemsToIterate.length) {
                    return {
                        value: myItemsToIterate [index++],
                        done: false,
                    }
                } else {
                    return {done: true};
                }
            }
        }
    }
};

for (let someElem of myObj) {
    console.log('someElem >', someElem);
}
*/



//
/*
const myObj = {
    items: [4, 5, 6, 7, 8, 9],
    items2: ['4', '5', '6', '7', '8', '9'],
    items3: ['4', '5', 6, 7, null, false, true, 19],
};

myObj [Symbol.iterator] = function () {
    const sources = Object.keys(this);
    let sourceIndex = 0;
    let itemIndex = 0;
    const self = this; // Зберігаємо посилання на зовнішній контекст
    
    return {
        next() {
            if (sourceIndex >= sources.length) {
                return {done: true};
            }
            const currentSource = sources [sourceIndex];
            const currentItems = self [currentSource];

            if (itemIndex >= currentItems.length) {
                sourceIndex++;
                itemIndex = 0;
              
                return this.next();
            }
            const // ДОПИСАТИ 
        }
    }
}
*/



//
/*
function fn1() {
    console.log('fn3 >');
    fn3();
}

function fn2() {
    console.log('fn2 >');
    fn1();
}

function fn3() {
    console.log('fn3 >');
}

fn2();
*/



/*
var testObj = {
    a: 12,
    b: 4,

    nestedObj: {
        t: 9,
    }
};
*/


// ДЗ приклад.
// 1 приклад 
/*
function decorator (fn) {       // це скелет
    return function () {
        return fn ();
    }
}



function showMessage () {
    console.log('Some Message');
}

const decoratedMessage = decorator (showMessage);
decoratedMessage();
*/



//2 приклад 
/*
function decorator (fn) {   // Функція що декорує

    return function (...args) {    // Сама декорація
        console.log(args);
        console.log(this);
        
        return fn.apply (this, args);
    }
}

function sum (a, b) {
    return a + b;
}

const decoratedSum = decorator(sum);

const result = decoratedSum (6, 6);
console.log('result >', result);
*/