"use strict";
var x = 1;

while ( x <= 100) {
   if(x % 2 === 0){
       console.log("Even Loop " + x);
   }
   x++
};


function squareOfNumber(x) {
    return x * x;
};


while (x <= 10){
    console.log(squareOfNumber(x));
    x++
};

do {
   console.log("The number is " + x)
    x++;
} while (x <= 25);

var i = 100

do{
    console.log(i);
    i -= 10;
} while (i >= -50);

for (var i = 1; i <= 10; i++){
    console.log(i);
}
for(var i = 1; i < 101; i++){
    if(i % 15 == 0) console.log("FizzBuzz");
    else if(i % 5 == 0) console.log("Buzz");
    else if(i % 3 == 0) console.log("Fizz");
    else console.log(i);
}

