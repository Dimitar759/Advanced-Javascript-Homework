

let movies = ["Space Oddysey", "The Godfather", "Deadpool", "Mad Max", "Moonlight", "Get Out", "Inception", "Avatar", "Oppenheimer"]

let findMovieButton = document.getElementById("btn");
let entryField = document.getElementById("movie");
let result = document.getElementById("result");


function movieAvailability(userInput) {
    let movieExists = false;
    for (let i = 0; i < movies.length; i++){
        if (userInput.toLowerCase() === movies[i].toLowerCase()) {
            movieExists = true;
        }
    }

    if (movieExists) {
        result.innerHTML += `<h1 style="color: green;">The movie can be rented</h1> `
    } else if (movieExists === false) {
         result.innerHTML += `<h1 style="color: red;">The movie can't be rented</h1> `
    }
      
}

findMovieButton.addEventListener("click", function () {
    let userInput = entryField.value;
    movieAvailability(userInput);
})






