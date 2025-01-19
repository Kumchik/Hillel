const words = ["apple", "banaNA", "kiWi", "ORANGE"];

function capitalizeStrings (strings) {
    return strings.map (word => {
        return word[0].toUpperCase() + word.slice(1).toLowerCase();
    });
}

console.log(capitalizeStrings(words));