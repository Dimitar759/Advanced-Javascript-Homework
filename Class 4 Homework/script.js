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
        element.style.color = "red";
    } else {
        element.style.color = color;
    }
}

let elementAndTextSize = (element, textSize) => {
    if (textSize === "") {
        element.style.fontSize = "12px";
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