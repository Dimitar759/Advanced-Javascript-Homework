let fromBeer = 0;
let toBeer = 5;
let beerPage = 1;
let beerContainer = document.getElementById('beerContainer');
let userBeerPage = document.getElementById("beerPage");
let sortOrder = "";
async function fetchBeers() {
    let allData = []; 
    let totalPages = 13; 

    try {
        for (let page = 1; page <= totalPages; page++) {
            let url = `https://api.punkapi.com/v2/beers?page=${page}`;
            let response = await fetch(url);
            let data = await response.json();
            allData.push(...data); 
        }
        getBeers(allData);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

function getBeers(data) {
    
    beerContainer.innerHTML = "";

    let startIndex = (beerPage - 1) * toBeer;
    let endIndex = Math.min(startIndex + toBeer, data.length);

    for (let i = startIndex; i < endIndex; i++) {
        if (i % 5 === 0) { 
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
    beerPage = 1; 
    toBeer = 5;
    beerContainer.innerHTML = '';
    previousBtn.disabled = true; 
    nextBtn.disabled = false;
    userBeerPage.innerHTML = `Page ${beerPage}/65`
    fetchBeers();
    

});

showTenBeers.addEventListener("click", function() {
    beerPage = 1; 
    toBeer = 10;
    beerContainer.innerHTML = '';
    previousBtn.disabled = true; 
    nextBtn.disabled = false;
    userBeerPage.innerHTML = `Page ${beerPage}/33`;
    fetchBeers();
});

showTwentyBeers.addEventListener("click", function() {
    beerPage = 1;
    toBeer = 20;
    beerContainer.innerHTML = '';
    previousBtn.disabled = true;
    nextBtn.disabled = false;
    userBeerPage.innerHTML = `Page ${beerPage}/17`
    fetchBeers();
});

document.addEventListener('DOMContentLoaded', function() {
    previousBtn.disabled = true; 
    nextBtn.disabled = false;
    userBeerPage.innerHTML = `Page ${beerPage}/65`
    fetchBeers()
    
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
    updatePageCount(); 
    sortingOrder();
    
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
        updatePageCount(); 
        sortingOrder();
        
    }

    if (toBeer === 5) {
        if (beerPage < 65) { 
            beerPage += 1;
            previousBtn.disabled = false; 
        }
        if (beerPage === 65) {
            nextBtn.disabled = true;
        }
        updatePageCount(); 
        sortingOrder();
        
    }

    if (toBeer === 10) {
        if (beerPage < 33) { 
            beerPage += 1;
            previousBtn.disabled = false; 
        }
        if (beerPage === 33) {
            nextBtn.disabled = true;
        }
        updatePageCount(); 
        sortingOrder()
    }
});

function updatePageCount() {
    let pageCount;
    if (toBeer === 5) {
        pageCount = 65;
    } else if (toBeer === 10) {
        pageCount = 33;
    } else if (toBeer === 20) {
        pageCount = 17;
    }
    userBeerPage.innerHTML = `Page ${beerPage}/${pageCount}`; 
}

let nameASC = document.getElementById("nameASC");
let nameDESC = document.getElementById("nameDESC");
let alcoholASC = document.getElementById("alcoholASC");
let alcoholDESC = document.getElementById("alcoholDESC");
let bitternessASC = document.getElementById("bitternessASC");
let bitternessDESC = document.getElementById("bitternessDESC");

nameASC.addEventListener("click",function(){
    sortOrder = "nameAsc"
    getNameASCBeers()
    
})

async function getNameASCBeers() {
    let allData = []; 
    let totalPages = 13; 

    try {
        for (let page = 1; page <= totalPages; page++) {
            let url = `https://api.punkapi.com/v2/beers?page=${page}`;
            let response = await fetch(url);
            let data = await response.json();
            allData.push(...data); 
        }
        allData.sort((a, b) => a.name.localeCompare(b.name));
        getBeers(allData);
        console.log(allData);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

nameDESC.addEventListener("click",function(){
    sortOrder = "nameDesc"
    getNameDescBeers()
})

async function getNameDescBeers() {
    let allData = []; 
    let totalPages = 13; 

    try {
        for (let page = 1; page <= totalPages; page++) {
            let url = `https://api.punkapi.com/v2/beers?page=${page}`;
            let response = await fetch(url);
            let data = await response.json();
            allData.push(...data); 
        }
        allData.sort((a, b) => b.name.localeCompare(a.name));
        getBeers(allData);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

alcoholASC.addEventListener("click",function(){
    sortOrder = "alcoholASC"
    getAlcoholASC()
    
})

async function getAlcoholASC() {
    let allData = []; 
    let totalPages = 13; 

    try {
        for (let page = 1; page <= totalPages; page++) {
            let url = `https://api.punkapi.com/v2/beers?page=${page}`;
            let response = await fetch(url);
            let data = await response.json();
            allData.push(...data); 
        }
        allData.sort((a, b) => a.abv - b.abv);
        getBeers(allData);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

alcoholDESC.addEventListener("click",function(){
    sortOrder = "alcoholDESC"
    getAlcoholDESC()
    
})

async function getAlcoholDESC() {
    let allData = []; 
    let totalPages = 13; 

    try {
        for (let page = 1; page <= totalPages; page++) {
            let url = `https://api.punkapi.com/v2/beers?page=${page}`;
            let response = await fetch(url);
            let data = await response.json();
            allData.push(...data); 
        }
        allData.sort((a, b) => b.abv - a.abv);
        getBeers(allData);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

bitternessASC.addEventListener("click",function(){
    sortOrder = "bitternessASC"
    getBitternessASC()
    
})

async function getBitternessASC() {
    let allData = []; 
    let totalPages = 13; 

    try {
        for (let page = 1; page <= totalPages; page++) {
            let url = `https://api.punkapi.com/v2/beers?page=${page}`;
            let response = await fetch(url);
            let data = await response.json();
            allData.push(...data); 
        }
        allData.sort((a, b) => a.ibu - b.ibu);
        getBeers(allData);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}


bitternessDESC.addEventListener("click",function(){
    sortOrder = "bitternessDESC"
    getBitternessDESC()
    
})

async function getBitternessDESC() {
    let allData = []; 
    let totalPages = 13; 

    try {
        for (let page = 1; page <= totalPages; page++) {
            let url = `https://api.punkapi.com/v2/beers?page=${page}`;
            let response = await fetch(url);
            let data = await response.json();
            allData.push(...data); 
        }
        allData.sort((a, b) => b.ibu - a.ibu);
        getBeers(allData);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

function sortingOrder(){
    if (sortOrder === "nameAsc") {
        getNameASCBeers();
    } else if (sortOrder === "nameDesc") {
        getNameDescBeers();
    } else if (sortOrder === "alcoholASC") {
        getAlcoholASC();
    } else if (sortOrder === "alcoholDESC") {
        getAlcoholDESC();
    } else if (sortOrder === "bitternessASC") {
        getBitternessASC(); 
    } else if (sortOrder === "bitternessDESC") {
        getBitternessDESC(); 
    } else {
        fetchBeers();
    }
}