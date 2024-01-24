//Exercise 1
//Function that takes a number through a parameter and returns how many digits that number has
console.log("----------------------------------")
console.log("Exercise 1:")

let digitsOfNumber = (number) => {
     let numberOfDigits = 0;

    // Handle negative numbers
    if (number < 0) {
        number = -number;
    }

    // Special case for number equal to 0
    if (number === 0) {
        return 1;
    }

    while (number > 0) {
        number = Math.floor(number / 10);
        numberOfDigits++;
    }

    return numberOfDigits;
}

let digits = digitsOfNumber(-1213);
console.log(digits);

//Function that takes a number through a parameter and returns if its even or odd

let evenOrOdd = (number) => {
    if (number % 2 == 0) {
        return `This is an even number`
    } 
    return `This is an odd number`
    
}

let evenOrOddNumber = evenOrOdd(263);
console.log(evenOrOddNumber);

//Function that takes a number through a parameter and returns if its positive or negative

let positiveOrNegative = (number) => {
    if (number > 0) {
        return `This is a positive number`
    } else if (number < 0) {
        return `This is a negative number`
    } 
        return `The number is 0, which isnt a negative or positive number!`
    
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



//Exercise 2

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

// //Exercise 3
// // An anonymous function that takes an array as a parameter and returns the square of each element.
console.log("----------------------------------")
console.log("Exercise 3:")
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

// //Exercise 4
// //A self-invoked function that calculates the factorial of a given number and logs it to the console. BONUS: Provide the input from the HTML, and print the result in the HTML.


let factorielBtn = document.getElementById("factoriel");
let resultFactoriel = document.getElementById("result");

factorielBtn.addEventListener("click", () => {
    resultFactoriel.innerHTML = ``;
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
});

// ////Exercise 5
// //

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


// //Exercise 6
console.log("----------------------------------")
console.log("Exercise 6")
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

// //Exercise 7
console.log("----------------------------------")
console.log("Exercise 7")

let stringche = document.getElementById("randomInput");
let vowelsBtn = document.getElementById("numberOfVowels");
let vowelsResult = document.getElementById("vowelsResult");
let vowels = "aeiou";
let count = 0;

let printVowels = inputString => {
    vowelsResult.innerHTML = "";
    for (let i = 0; i < inputString.length; i++) {
        if (vowels.includes(inputString[i])) {
            count++;
        }
    }
    console.log(`Number of vowels in "${stringche.value}": ${count}`);
    vowelsResult.innerHTML += `Number of vowels in "${stringche.value}" is: ${count}`
};

vowelsBtn.addEventListener("click", () => {
    let userInput = stringche.value;
    printVowels(userInput);
})




