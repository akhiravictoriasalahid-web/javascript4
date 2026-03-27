// Exercise 1.
function guessNumberGame() {
    let randomNumber = Math.floor(Math.random() * 10) + 1;
    let guess = 0;

    while (guess !== randomNumber) {
        guess = parseFloat(prompt("Guess a number between 1 and 10:"));
        console.log(`Guess: ${guess}`);

        if (guess > randomNumber) {
            console.log("Too High!, try again.");
        } else if (guess < randomNumber) {
            console.log("Too Low!, try again.");
        } else {
            console.log(`Congrats! The correct number is: ${randomNumber}. YOU WIN!`);
        }
    }
}
guessNumberGame();


// Exercise 2
function generateRandomArray(length) {
    let numbers = [];

    for (let i = 0; i < length; i++) {
        let randomNumber = Math.floor(Math.random() *100) + 1;
        numbers.push(randomNumber);
    }
    return numbers;
}
console.log(generateRandomArray(10));


// Exercise 3
function sumEvenNumbers(array) {
    let sum = 0;

    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            sum += array[i];
        }
    }
    return sum;
}

console.log(sumEvenNumbers([20,10,25]));