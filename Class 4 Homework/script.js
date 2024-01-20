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

////Exercise 5
//

let randomText = document.getElementById("randomText");
let reverseText = document.getElementById("reverseText");
let reversedResult = document.getElementById("reversedResult");

let reversing = (userText) => {
    let textArray = userText.split("");
    let reversedArray = textArray.reverse();
    let joinArrayToString = reversedArray.join("");

    return joinArrayToString
}

reverseText.addEventListener("click", () => {
    reversedResult.innerHTML = "";
    let text = randomText.value;

    let result = reversing(text);

    reversedResult.innerHTML += result;
   
});


//Exercise 6
let array = [-10, 5, 7894, NaN, 'Hello world', Infinity, false, [Object, Object], 25, name => `Hello ${name}`, -Infinity, ['hi', 28, -93, true], { name: 'Bob', age: 23, }, undefined, 14, null, 159, 0, -11];

let filteredArray = [];

let positiveNumbersProduct = function (randomArray) {
    let multipliedNumbers = 1;
    for (let i = 0; i < randomArray.length; i++) {
        if (!isNaN(randomArray[i])) {
            if (randomArray[i] > 0) {
                filteredArray.push(randomArray[i])
                multipliedNumbers = multipliedNumbers * randomArray[i]; // ova ke dava infinite, deka i infinite spagja vo positive number, ne beshe spomnato vo zadachata vo baranjeto dali treba da se trgne infinity inache ke napravev if statement za bez infinity no vaka spored baranjeto na domashnata sekogas ke e infinite!
            }
        }
    }
    console.log(filteredArray);
    console.log(multipliedNumbers);
}
positiveNumbersProduct(array);

//Exercise 7

let stringche = "deoxyribonucleic acid";
let vowels = "aeiou";
let count = 0;

let printVowels = inputString => {
    for (let i = 0; i < inputString.length; i++) {
        if (vowels.includes(inputString[i])) {
            count++;
        }
    }
};

printVowels(stringche);

console.log(`Number of vowels in "${stringche}": ${count}`);

