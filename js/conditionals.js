// function () {
    "use strict";

    /**
     * TODO:
     * Write some JavaScript that uses a `confirm` dialog to ask the user if they
     * would like to enter a number. If they click 'Ok', prompt the user for a
     * number, then use 3 separate alerts to tell the user:
     *
     * - whether the number is even or odd
     * - what the number plus 100 is
     * - if the number is negative or positive
     *
     * if what the user enters is not a number, use an alert to tell them that, and
     * do *not* display any of the above information.
     *
     * Can you refactor your code to use functions?
     */

    var num;
    var answer;

  answer = confirm("Would you like to enter a number?");

    if(answer === true) {
        num = parseInt(prompt("Enter Number:"));

            if (num % 2 === 0) {
                alert("This is an even number.");
            } else {
                alert("This is an odd number.");
            }
    }
    else {
            alert("Number Not Entered!");
        }



    if(num > 0){
        alert("This number is positive!");
    }
    if(num < 0){
        alert("This number is negative!");
    }



/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined above, if the color passed is not
 * one of the ones defined above, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color everytime the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];

var color = prompt("Enter A Color");
switch (color.toLowerCase()){
    case "blue":
        alert("blue is the color of the sky");
        console.log("blue is the color of the sky");
        break;
    case "red":
        alert("Strawberries are red");
        console.log("Strawberries are red");
        break;
    case "orange":
        alert("no real word rhymes with orange");
        console.log("no real word rhymes with orange");
        break;
    case "yellow":
        alert("yellow like the sun");
        console.log("yellow like the sun");
        break;
    case "green":
        alert("I have green hair");
        console.log("I have green hair");
        break;
    case "indigo":
        alert("indigo as the night sky");
        console.log("indigo as the night sky");
        break;
    case "violet":
        alert("violet is the best color");
        console.log("violet is the best color");
        break;
    default:
        alert("I don't know much about " + color);
        console.log("I don't know much about " + color);
        break;
}



/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message everytime you refresh the page
 */

function randomColor(){
    return randomColor;
}
console.log(randomColor);

/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

function calculateTotal(luckyNUmber, total){
    var finalTotal;
    total = parseFloat(total);
    switch(lukcyNumber){
        switch(parseInt(luckyNumber)){
            case 0:
                finalTotal = total;
                break;
        case 1:
            finalTotal = total - (total * .10);
            break;
        case 2:
            finalTotal = total - (total * .25);
            break;
        case 3:
            finalTotal = total - (total * .35);
            break;
        case 4:
            finalTotal = total - (total * .50);
            break;
        case 5:
            finalTotal = 0;
            break;
        default: finalTotal = total;
        break;
        }
        return finalTotal;
    }
}
var discountedTotal = calculatedTotal(luckyNumber0, total125);
    console.log(discountedTotal);
var discountedTotal = calculatedTotal(luckyNumber3, total125);
console.log(discountedTotal);
var discountedTotal = calculatedTotal(luckyNumber5, total125);
console.log(discountedTotal);

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 5
var luckyNumber = Math.floor(Math.random() * 5 +1;

function promptForTotal(luckyNumber){

    var promptedtotal = prompt("what is your total?");
var discountTotal = calculateTotal(luckyNumber, promptedTotal);

alert("Your total before discount was 4" + promptedTotal + ", but your drew number " + luckyNumber + ", so you pay $" + disocuntTotal + "!");
}
promptForTotal(luckyNumber);


// })()
