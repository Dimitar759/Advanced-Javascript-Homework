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
    const beerContainer = document.getElementById('beerContainer');

    for (let i = 0; i < toBeer; i += 5) {
        const row = document.createElement('div');
        row.className = 'row mx-auto'; 

        for (let j = i; j < i + 5 && j < toBeer; j++) {
            const beer = data[j];

            const col = document.createElement('div');
            col.className = 'col-2 mx-auto gy-2';

            const card = document.createElement('div');
            card.className = 'card h-100';

            const img = document.createElement('img');
            img.src = "beers.png";
            img.className = 'card-img-top';
            img.alt = beer.name;

            const cardBody = document.createElement('div');
            cardBody.className = 'card-body';

            const title = document.createElement('h5');
            title.className = 'card-title';
            title.textContent = beer.name;

            const description = document.createElement('p');
            description.className = 'card-text';
            description.textContent = beer.description;

            const button = document.createElement('a');
            button.href = '#';
            button.className = 'btn btn-primary';
            button.textContent = 'More Info';

            cardBody.appendChild(title);
            cardBody.appendChild(description);
            cardBody.appendChild(button);

            card.appendChild(img);
            card.appendChild(cardBody);

            col.appendChild(card);

            row.appendChild(col);
        }

        beerContainer.appendChild(row);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const beersLink = document.querySelector('.nav-link[href="#beers"]');
    const beersSection = document.getElementById('beers');

    beersLink.addEventListener('click', function(event) {
        event.preventDefault(); 

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



document.addEventListener('DOMContentLoaded', function() {
    fetchBeers();
});