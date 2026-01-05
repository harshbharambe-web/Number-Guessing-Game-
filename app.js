function startGame() {

    const range = Number(prompt("Enter your numeric range to guess!!!"));

    const num = Math.floor(Math.random() * range) + 1;

    let guess = prompt("Guess the number!!!");

    while (true) {

        if (guess === "quit") {
            console.log("User quit");
            break;
        }

        guess = Number(guess);

        if (guess === num) {
            alert("The number " + guess + " you guessed is right, YOU WON!!!!!!");
            console.log("You won!!!!");
            break;
        } 
        else {
            guess = prompt("The guess was wrong, Please try again!!!");
        }
    }
}
