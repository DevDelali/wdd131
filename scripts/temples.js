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
