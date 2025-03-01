/*
let myPromise = new Promise (function (resolve, reject) {
    const a = 5 + 8;
    reject (a);
});

console.log(myPromise);
*/




// HW
/*
let timePromise = new Promise (function (resolve) {
    setTimeout (() => resolve ('Time Ends'), 5000)
});

console.log(timePromise);

timePromise.then ((result) => console.log(result));
*/


//callback hell


setTimeout (() => {
    console.log('Timer 1');
    
    setTimeout (() => {
        console.log('Timer 2');

        setTimeout (() => {
            console.log('Timer 3');

            setTimeout (() => {
                console.log('Timer 4');

            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);


let delay = new Promise (resolve => {
    setTimeout (() => resolve ('Promise done'), 1000);
});


delay
    .then ((result) => {
        console.log(result, '1');
        
        
    })