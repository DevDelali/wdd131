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

const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
];

// populate product select options
const productSelect = document.querySelector("#product");

products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.id;
    option.textContent = product.name;
    productSelect.appendChild(option);
});

// increment review count when the form is submitted (not on page load)
const form = document.querySelector("form");
if (form) {
    form.addEventListener("submit", () => {
        let reviewCount = Number(localStorage.getItem("reviewCount") || 0);
        reviewCount += 1;
        localStorage.setItem("reviewCount", reviewCount);
    });
}
