let result = document.getElementById("result");
let printBtn = document.getElementById("print");

function printingStats(name, height, weight, hairColor, eyeColor) {
    result.innerHTML += `<h1>${name}</h1>`

    let table = document.createElement("table");
    table.style.border = "1px solid black";

    let header = table.createTHead();
    let headerRow = header.insertRow();
    let heightHeader = headerRow.insertCell(0);
    let weightHeader = headerRow.insertCell(1);
    let hairColorHeader = headerRow.insertCell(2);
    let eyeColorHeader = headerRow.insertCell(3);

    heightHeader.innerText = "Height";
    weightHeader.innerText = "Weight";
    hairColorHeader.innerText = "HairColor";
    eyeColorHeader.innerText = "EyeColor";

    heightHeader.style.border = "1px solid black";
    weightHeader.style.border = "1px solid black";
    hairColorHeader.style.border = "1px solid black";
    eyeColorHeader.style.border = "1px solid black";

    let body = table.createTBody();

    let row = body.insertRow();
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);

    cell1.innerText = height;
    cell2.innerText = `${weight}kg`;
    cell3.innerText = hairColor;
    cell4.innerText = eyeColor;

    cell1.style.border = "1px solid black";
    cell2.style.border = "1px solid black";
    cell3.style.border = "1px solid black";
    cell4.style.border = "1px solid black";

    result.appendChild(table);

}

printBtn.addEventListener("click", function () {
    fetch("https://swapi.dev/api/people/1 ")
        .then(function (response) {
            return response.json()
        })
        .then(function (response) {
            console.log("call successful!");
            console.log(response);

            printingStats(response.name, response.height, response.mass, response.hair_color, response.eye_color);
            
        })
        .catch(function (response) {
            console.log("the request has failed: " + response.status);
            console.log(response.responseText);
        })
})