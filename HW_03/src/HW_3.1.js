const someNomber = +prompt ('Введіть число')

if (someNomber % 3 === 0 && someNomber % 5 === 0) {
    console.log('FizzBuzz')
}
else if (someNomber % 3 === 0) {
    console.log('Fizz')
}
else if (someNomber % 5 === 0) {
    console.log('Buzz')
}
// Використав else if тому що потрібно коли число ділиться і на 3 і на 5, виводилось в консоль тільки FizzBuzz.