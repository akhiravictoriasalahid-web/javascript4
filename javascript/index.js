// Exercise 1.
function guessNumberGame() {
    let randomNumber = Math.floor(Math.random() * 10);
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