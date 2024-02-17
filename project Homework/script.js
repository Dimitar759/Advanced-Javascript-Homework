let fromBeer = 0;
let toBeer = 5;
function fetchBeers() {
    fetch('https://api.punkapi.com/v2/beers')
    .then(response => response.json())
    .then(data => {
        getBeers(data);
    })
    .catch(error => console.error('Error fetching data:', error));
}

function getBeers(data) {
    // Get the beer container
    const beerContainer = document.getElementById('beerContainer');

    // Loop through the data and create HTML elements
    for (let i = 0; i < toBeer; i += 5) {
        // Create a new row for every 5 beers
        const row = document.createElement('div');
        row.className = 'row mx-auto'; // Added mx-auto class for centering

        // Loop through each set of 5 beers
        for (let j = i; j < i + 5 && j < toBeer; j++) {
            const beer = data[j];

            // Create column for each beer
            const col = document.createElement('div');
            col.className = 'col-lg-2 col-md-2 col-sm-2 col-2 mx-auto';

            // Create card for beer
            const card = document.createElement('div');
            card.className = 'card h-100';

            // Create image for beer
            const img = document.createElement('img');
            img.src = "beers.png";
            img.className = 'card-img-top';
            img.alt = beer.name;

            // Create card body
            const cardBody = document.createElement('div');
            cardBody.className = 'card-body';

            // Create title for beer
            const title = document.createElement('h5');
            title.className = 'card-title';
            title.textContent = beer.name;

            // Create description for beer
            const description = document.createElement('p');
            description.className = 'card-text';
            description.textContent = beer.description;

            // Create button for beer
            const button = document.createElement('a');
            button.href = '#';
            button.className = 'btn btn-primary';
            button.textContent = 'More Info';

            // Append elements to card body
            cardBody.appendChild(title);
            cardBody.appendChild(description);
            cardBody.appendChild(button);

            // Append elements to card
            card.appendChild(img);
            card.appendChild(cardBody);

            // Append card to column
            col.appendChild(card);

            // Append column to row
            row.appendChild(col);
        }

        // Append the row to the beer container
        beerContainer.appendChild(row);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const beersLink = document.querySelector('.nav-link[href="#beers"]');
    const beersSection = document.getElementById('beers');

    beersLink.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default link behavior

        // Scroll to the beers section
        beersSection.scrollIntoView({ behavior: 'smooth' });
    });
});

let showFiveBeers = document.getElementById("5");
let showTenBeers = document.getElementById("10");
let showTwentyBeers = document.getElementById("20");

showFiveBeers.addEventListener("click", function() {
    toBeer = 5;
    document.getElementById('beerContainer').innerHTML = '';
    fetchBeers();
});

showTenBeers.addEventListener("click", function() {
    toBeer = 10;
    document.getElementById('beerContainer').innerHTML = '';
    fetchBeers();
});

showTwentyBeers.addEventListener("click", function() {
    toBeer = 20;
    document.getElementById('beerContainer').innerHTML = '';
    fetchBeers();
});




// Initial fetch and display of beers when the page loads
document.addEventListener('DOMContentLoaded', function() {
    fetchBeers();
});