const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];

function uniqueValues(array1, array2) {
    return Array.from(new Set(array1.concat(array2)));
}

const uniqueValuesArray = uniqueValues(array1, array2);
console.log(uniqueValuesArray);