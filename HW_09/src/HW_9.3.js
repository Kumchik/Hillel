function group(array, callback) {
    return array.reduce((result, item) => {
        const key = callback(item);
        if (!result[key]) {
            result[key] = []; 
        }
        result[key].push(item);
        return result;
    }, {});
}

const data = [
    { category: "fruit", name: "apple" },
    { category: "fruit", name: "banana" },
    { category: "vegetable", name: "carrot" },
    { category: "fruit", name: "orange" },
    { category: "vegetable", name: "pepper" },
];

const groupedData = group(data, (item) => item.category);

console.log(groupedData);