"use strict";

// var i = 2;
//
// while (i <= 65536){
//     console.log(i);
//     i *= 2;
// }

var allCones = Math.floor(Math.random() * 50) + 50;
var cones = Math.floor(Math.random() * 5) + 1;

function perCustomer(cones) {
    if(cones <= allCones){
    return cones + " cones sold!"
}else if(cones > allCones){
    return "Cannot sell you " + cones + " I only have " + allCones - 50;
}else if(cones === allCOnes){
    return "Yay! I sold them all!";
}

do{
    console.log(allCones);
}while (perCustomer <= 5)