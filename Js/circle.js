(function() {
    "use strict";

    // create a circle object
    var circle = {
        radius: 3,

        getArea: function (area) {
            area = Math.PI * (Math.pow(3, 2))
            // TODO: complete this method
            // hint: area = pi * radius^2

            return area; // TODO: return the proper value
        },

        logInfo: function (doRounding) {
            if(doROunding === true){
                return Math.round(doRounding);
            }else {
                return area;
            }
            // TODO: complete this method.

            // If doRounding is true, round the result to the nearest integer.
            // Otherwise, output the complete value
        }
    };
    console.log("Area of a circle with radius: " + this.radius + ", is: " + this.area);


    // log info about the circle
    console.log(getArea);
    circle.logInfo(false);
    console.log(doRounding);
    circle.logInfo(true);

    console.log("=======================================================");
    // TODO: Change the radius of the circle to 5.

    var circleFive = parseFloat(circle) + 5;




    // log info about the circle
    console.log(circleFive);
    circle.logInfo(false);
    console.log(doRounding);
    circle.logInfo(true);
})();
