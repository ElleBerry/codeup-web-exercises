"use strict";

var i = 2;

while (i <= 65536){
    console.log(i);
    i *= 2;
}

var allCones = Math.floor(Math.random() * 50) + 50;
var cones = Math.floor(Math.random() * 5) + 1;

function perCustomer(cones) {
    if (cones <= allCones) {
        console.log(cones + " cones sold!");
    } else if (cones > allCones) {
        console.log("Cannot sell you " + cones + " I only have " + allCones - 50);
    } else if (cones === allCOnes) {
        console.log("Yay! I sold them all!");
    }
}
do{
    console.log(perCustomer(allCones));
}while (perCustomer <= 5);

