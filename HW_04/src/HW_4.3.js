const TreeHeight = +prompt("Введіть бажану висоту ялинки");
if (isNaN (TreeHeight) || TreeHeight <= 1 ) { // Щоб було більше 1 рядка
    console.log("Введіть позитивне число більше 1");
} else {
    for (let i = 1; i <= TreeHeight; i++) {
        const spaces = " " .repeat(TreeHeight - i); // робимо відступи
        const stars = "*" .repeat (2 * i - 1); // робимо зірочки
        console.log (spaces + stars)
    }
}