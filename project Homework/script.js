let fromBeer = 0;
let toBeer = 5;
let beerPage = 1;
let beerContainer = document.getElementById('beerContainer');
function fetchBeers() {
    let allData = []; // Store all fetched data
    let totalPages = 13; // Assuming there are 13 pages

    // Fetch data for each page
    let fetchPromises = [];
    for (let page = 1; page <= totalPages; page++) {
        let url = `https://api.punkapi.com/v2/beers?page=${page}`;
        fetchPromises.push(fetch(url)
            .then(response => response.json())
            .then(data => {
                allData.push(...data); // Append data from this page to allData
            })
            .catch(error => console.error('Error fetching data:', error))
        );
    }

    // Wait for all fetches to complete
    Promise.all(fetchPromises)
        .then(() => {
            getBeers(allData); // Once all data is fetched, call getBeers
    });
}

function getBeers(data) {
    
    beerContainer.innerHTML = "";

    // Calculate starting index
    let startIndex = (beerPage - 1) * toBeer;
    // Calculate ending index, ensuring it doesn't exceed the length of the data array
    let endIndex = Math.min(startIndex + toBeer, data.length);

    for (let i = startIndex; i < endIndex; i++) {
        if (i % 5 === 0) { // Start a new row after every 5th beer
            var row = document.createElement('div');
            row.className = 'row mx-auto';
            beerContainer.appendChild(row);
        }

        const beer = data[i];

        const col = document.createElement('div');
        col.className = 'col-2 mx-auto ';
        col.style.margin = "0 0 40px 0";

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
    beerPage = 1; // Reset beerPage to 1
    toBeer = 5;
    beerContainer.innerHTML = '';
    previousBtn.disabled = true; 
    nextBtn.disabled = false;
    fetchBeers();
});

showTenBeers.addEventListener("click", function() {
    beerPage = 1; // Reset beerPage to 1
    toBeer = 10;
    beerContainer.innerHTML = '';
    previousBtn.disabled = true; 
    nextBtn.disabled = false;
    fetchBeers();
});

showTwentyBeers.addEventListener("click", function() {
    beerPage = 1; // Reset beerPage to 1
    toBeer = 20;
    beerContainer.innerHTML = '';
    previousBtn.disabled = true;
    nextBtn.disabled = false;
    fetchBeers();
});

document.addEventListener('DOMContentLoaded', function() {
    previousBtn.disabled = true; 
    nextBtn.disabled = false;
    fetchBeers();
});

let previousBtn = document.getElementById("previous");
let nextBtn = document.getElementById("next");

previousBtn.addEventListener("click", function() {
    if (beerPage > 1) {
        beerPage -= 1;
        nextBtn.disabled = false; 
    }
    if (beerPage === 1) {
        previousBtn.disabled = true;
    }
    fetchBeers();
});

nextBtn.addEventListener("click", function() {

    if (toBeer === 20) {
        if (beerPage < 17) { 
            beerPage += 1;
            previousBtn.disabled = false; 
        }
        if (beerPage === 17) {
            nextBtn.disabled = true;
        }
        fetchBeers();
    }

    if (toBeer === 5) {
        if (beerPage < 65) { 
            beerPage += 1;
            previousBtn.disabled = false; 
        }
        if (beerPage === 65) {
            nextBtn.disabled = true;
        }
        fetchBeers();
    }

    if (toBeer === 10) {
        if (beerPage < 33) { 
            beerPage += 1;
            previousBtn.disabled = false; 
        }
        if (beerPage === 33) {
            nextBtn.disabled = true;
        }
        fetchBeers();
    }
    
    
    
});