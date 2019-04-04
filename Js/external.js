"use strict";

console.log("Hello from JavaScript!");
alert("Welcome to my Website!");

var color = prompt("What is your favorite color?");
console.log("Their favorite color is " + color);
alert("Hey, " + color + " is my favorite color too!");

var theLittleMermaid = prompt("How many days would you like to rent The Little Mermaid?");
console.log("The Little Mermaid will be rented for " + theLittleMermaid + " days");

var brotherBear = prompt("How many days would you like to rent Brother Bear?");
console.log("Brother Bear will be rented for " + brotherBear +" days");

var hercules = prompt("How many days would you like to rent Hercules?");
console.log("Hercules will be rented for " + hercules + " days");


var pricePerDay = prompt("What was the daily rate to rent these movies?");

var totalPrice = (( +theLittleMermaid + +brotherBear + +hercules) * pricePerDay);
alert("It will cost" + " $" + totalPrice + " to rent these movies");



var g = prompt("How much would you like Google to pay you per hour?");
var gh = prompt("How many hours would you like to work at Google?");

var a = prompt("How much would you like Amazon to pay you per hour?");
var ah = prompt("How many hours would you like to work at Amazon?");

var f = prompt("How much would you like Facebook to pay you per hour?");
var fh = prompt("How many hours would you like to work at Facebook?");

var pay = ((g * gh) + (a * ah) + (f * fh));
alert("You will make " + "$" + pay + " this week." );

console.log("Total weekly pay: " + ((g * gh) + (a * ah) + (f * fh)));




var numberOfItems = prompt("How many items did you buy?");
var offerExpiration = confirm("Is the offer valid?");
var membership = confirm("Are you a premium member?");

var couponStatus = (membership || Number(numberOfItems) > 2) && offerExpiration;

alert("Can customer use this offer?" + couponStatus);



var classSize = confirm( "Is the class full? If not, click cancel.");
var classSchedule = confrim("Does this class conflict with your current schedule? If not, click cancel.");
var enrollmentStatus = !(!classSize && !classSchedule);

alert("Enrollment Status:" + enrollmentStatus);