const numbers = [1, 2, 3, 4, 5];

function analyzeArray(array) {
    const sum = array.reduce((acc, num) => acc + num, 0);
    const average = sum / array.length;
    const min = Math.min(...array);
    const max = Math.max(...array);
    
    return { sum, average, min, max };
}

console.log(analyzeArray(numbers)); 