(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */

    // var person = [
    //     {
    //         names:{
    //             firstName: "Elle",
    //             lastName: "Berry",
    //         },
    //         greeting: sayHello(),
    //     }
    // ];

    var person = {};

    person.firstName = "Elle";
    person.lastName = "Berry";

    console.log(person);

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

    person.sayHello = function sayHello(){
       return "Hello from " + this.firstName + " " + this.lastName + "!";
    };


    // person.sayHello = "Good morning. I want to sleep.";

    // console.log(sayHello);

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];

    function calculateDiscount(total){
        var output = 0;
        if(total > 200) {
            output = total * .12;
        }
        return output;
    };

    // function displayShopperInfo(shopper){
    //     var output = "";
    //     var amount = shopper.amount;
    //     var discount = convertToCurrency(calculateDisocount(shopper.amount));
    //     var finalAmount = convertToCurrency(shopper.amount - calculateDiscount(shopper.amount));
    //     output += shopper.name + " spent " + amount;
    //     output += " and received a discount of " + discount;
    //     output += " and paid $" + finalAmount;
    //     return output;
    // }
    // console.log(displayShopperInfo(shoppers[0]));

// function displayShopperInfo(){
//     shoppers.forEach(function(shoppers){
//         console.log(displayShopperInfo(shoppers));
//     })
// }
//     displayShopperInfo(shoppers);

    // shoppers.forEach(function(shopper)){
    //     shopper.amount.forEach(function(amount)){
    //         if(amount < 200){
    //             return "Sorry, ineligible for discount.";
    // }else if(amount>=200){
    //             return "discount applied. Your New Total: " + amount -(amount*.12);
    // }
    //     }
    // };

    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

    var books = [
        {
            title:" Title 1",
            author: {
                firstName: "First Name 1",
                lastName: "Last Name 1",
            }
        },
        {
            title:" Title 1",
            author: {
                firstName: "First Name 2",
                lastName: "Last Name 2",
            }
        },
        {
            title:" Title 1",
            author: {
                firstName: "First Name 3",
                lastName: "Last Name 3",
            }
        },
        {
            title:" Title 1",
            author: {
                firstName: "First Name 4",
                lastName: "Last Name 4",
            }
        },
    ];
    console.log(books[4].author.firstName);

    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

    books.forEach(function(books) {
        var output = "";
        output += "Book #" + (index + 1) + "\n";
        output += "Title: " + books.title + "\n";
        output += "Author: " + books.author.firstName + " " + books.author.lastName;
        console.log(output);
    });

    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

})();
