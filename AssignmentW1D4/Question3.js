// Write a JavaScript program that gives the user three tries to guess the correct pin of the
// account. You set the pin as a constant. When correct display “Correct, welcome back.” When
// incorrect display “Incorrect, try again.”. When run out of tries display “Sorry but you have been
// locked out.”


let guess;
//= +prompt("enter the number guesssed");
const PIN = 12345;

let i = 0;
while (i < 3) {
    guess = +prompt("enter the number guesssed");
    if (guess == PIN && i === 0) {
        console.log("Correct, welcome back again");
        break;
    } else if (guess === PIN && i == 1) {
        console.log("Correct, welcome back again");
        break;
    } else if (guess === PIN && i == 2) {
        console.log("Correct, welcome back again");
        break;
    }

    i++;
    console.log("Incorrect, try again. again ");
}
if (i === 3) {
    console.log("Sorry but you have been locked out");
}

