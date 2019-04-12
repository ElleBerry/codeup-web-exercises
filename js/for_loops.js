"use strict";


function outputRow(a, b){
    var output = "";
    var total = a * b;
    output += a + " x " + b + " = " + total;
    return output;
}

function showMultiplicationTable(num){
    var output ="";
    for(var i = 1;i <= 10; i +=1){
    output += outputRow(num, i) + "\n";
    }
    return output;
}

function randomNUmber(){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function isEvenOdd(num){
    var outputMessage ="";
    outputMessage += (num % 2 === 0) ? "is even" : "is odd";
    console.log(outputMessage);
}

function evenOddCalculater() {
    for (var i = 1; 1<= 10; i += 1){
        var randNum = randomNumber(20, 200);
        var result = isEvenOdd(randNum);
    }
    return result;
}

for (var i = 1; i < 10; i++) {
    console.log(String(i).repeat(i));
}

for (var i = 100; i >= 5; i -= 5) {
    console.log(i);
}