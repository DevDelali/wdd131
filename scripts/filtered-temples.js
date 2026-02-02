// select the DOM elements for output
const lastModified = document.querySelector("#lastModified");

const currentYear = document.querySelector("#currentyear");


// use the date object
const today = new Date();

// display the formatted current date and last-modified info (if element exists)
if (lastModified) {
    lastModified.innerHTML = `Today is <span class="highlight">${new Intl.DateTimeFormat("en-US", {
        dateStyle: "full"
    }).format(today)}</span>`;

    if (document.lastModified) {
        const lastModDate = new Date(document.lastModified);
        lastModified.innerHTML += `<br>Last modified: <span class="highlight">${new Intl.DateTimeFormat("en-US", {
            dateStyle: "medium",
            timeStyle: "short"
        }).format(lastModDate)}</span>`;
    }
}

// setting the current year
if (currentYear) {
    currentYear.textContent = today.getFullYear();
}

//hamburger menu
const mainnav = document.querySelector('nav')
const hambutton = document.querySelector('#menu');


hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
});

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },

    {
        templeName: "Accra , Ghana",
        location: "Accra , Ghana",
        dedicated: "2004, January 11",
        area: 17500,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/accra-ghana-temple/accra-ghana-temple-13760-main.jpg"
    }, {
        templeName: "Copenhagen , Denmark",
        location: "Copenhagen , Denmark",
        dedicated: "2004 , May 23",
        area: 25000,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/copenhagen-denmark-temple/copenhagen-denmark-temple-16169-main.jpg"
    }, {
        templeName: "San Antonio Texas",
        location: "San Antonio,Texas",
        dedicated: "2005, May 12",
        area: 16800,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/san-antonio-texas-temple/san-antonio-texas-temple-55647-main.jpg"
    },
    {
        templeName: "Newport Beach California ",
        location: "Newport Beach, California",
        dedicated: "2005, August 28",
        area: 17800,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/newport-beach-california-temple/newport-beach-california-temple-46818-main.jpg://churchofjesuschristtemples.org/assets/img/temples/newport-beach-california-temple/newport-beach-california-temple-34668-main.jpg://churchofjesuschristtemples.org/assets/img/temples/aba-nigeria-temple/aba-nigeria-temple-5087-main.jpg"
    },

    // Add more temple objects here...
];

createTempleCard();

function createTempleCard() {
    temples.forEach(temple => {
        let card = document.createElement("section");
        let name = document.createElement("h3");
        let location = document.createElement("p");
        let dedication = document.createElement("p");
        let area = document.createElement("p")
        let img = document.createElement("img");


        name.textContent = temple.templeName;
        location.innerHTML = `<span class="label">Location: </span? ${temple.location}`;
        dedication.innerHTML = `<span class="label">Dedicated: </span>${temple.dedicated}`;
        area.innerHTML = `<span class="label">Dedicated:</span>${temple.area}`;
        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", `${temple.templeName} Temple`);
        img.setAttribute("loading", "lazy")

        card.appendChild(name)
        card.appendChild(location)
        card.appendChild(dedication)
        card.appendChild(area)
        card.appendChild(img)

        document.querySelector(".cointainer").appendChild(card);

    })
}