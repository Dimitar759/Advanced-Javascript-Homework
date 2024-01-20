//Exercise 1
//Function that takes a number through a parameter and returns how many digits that number has

let digitsOfNumber = (number) => {
    let numberAsString = number.toString(); 
    let numberOfDigits = numberAsString.length;
    return numberOfDigits;
}

let digits = digitsOfNumber(12345);
console.log(digits);

//Function that takes a number through a parameter and returns if its even or odd

let evenOrOdd = (number) => {
    if (number % 2 == 0) {
        return `This is an even number`
    } else {
        return `This is an odd number`
    }
}

let evenOrOddNumber = evenOrOdd(13243);
console.log(evenOrOddNumber);

//Function that takes a number through a parameter and returns if its positive or negative

let positiveOrNegative = (number) => {
    if (number > 0) {
        return `This is a positive number`
    } else if (number < 0) {
        return `This is a negative number`
    } else if (number === 0) {
        return `The number is 0, which isnt a negative or positive number!`
    }
}

let positiveOrNegativeNumber = positiveOrNegative(12);
console.log(positiveOrNegativeNumber);

//A function that takes a number through a parameter and calls all three functions for the number that was passed. It should show the results in the console.

allResults(-432);

function allResults(number) {
    let numberOfDigits = digitsOfNumber(number)
    let evenOrOddNumber = evenOrOdd(number)
    let positiveOrNegativeNumber = positiveOrNegative(number)

    console.log(`The number has ${numberOfDigits} digits, it's an ${evenOrOddNumber} number and a ${positiveOrNegativeNumber} number`)

}

console.log("----------------------------------")

//Exercise 2
//
let colorInput = document.getElementById("color");
let textSizeInput = document.getElementById("textSize");
let changeElementBtn = document.getElementById("changeH1");
let h1Text = document.getElementById("h1text");

let elementAndColor = (element, color) => {
    if (color === "") {
        element.style.color = "black";
    } else {
        element.style.color = color;
    }
}

let elementAndTextSize = (element, textSize) => {
    if (textSize === "") {
        element.style.fontSize = "24px";
    } else {
        element.style.fontSize = `${textSize}px`;
    }
}

changeElementBtn.addEventListener("click", () => {
    let color = colorInput.value;
    let textSize = textSizeInput.value;

    elementAndColor(h1Text, color);
    elementAndTextSize(h1Text, textSize);
});

//Exercise 3
// An anonymous function that takes an array as a parameter and returns the square of each element.
let arrayOfNums = [1, 2, 3, 4, 5];

let numbers = function(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(arr[i] * arr[i]);
    }
    return result;
};

let squaredArray = numbers(arrayOfNums);
console.log(squaredArray);

//Exercise 4
//A self-invoked function that calculates the factorial of a given number and logs it to the console. BONUS: Provide the input from the HTML, and print the result in the HTML.

let factorielBtn = document.getElementById("factoriel");
let resultFactoriel = document.getElementById("result");

factorielBtn.addEventListener("click", () => {
    let userInput = document.getElementById("factorielNumber");
    let factorielNumber = parseInt(userInput.value);

    let factorialResult = (function calculateFactorial(number) {
        if (number === 0) {
            return 1;
        } else {
            return number * calculateFactorial(number - 1);
        }
    })(factorielNumber);

    resultFactoriel.innerHTML += `The result is: ${factorialResult}`;
    console.log(factorialResult);
});

//
// function factoriel(n) {
//     // Base case: factorial of 0 is 1
//     if (n === 0) {
//         return 1;
//     }
//     // Recursive case: n! = n * (n-1)!
//     return n * factoriel(n - 1);
// }

// let resultFactoriel = factoriel(500);
// console.log(resultFactoriel);