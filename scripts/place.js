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

function displayWeather(temperature, windSpeed, conditions) {
    // 1. Calculate wind chill using the formula
    let windChill = "N/A";

    // Formula valid if temp <= 50°F and wind > 3 mph
    if (temperature <= 50 && windSpeed > 3) {
        let chillCalc = 35.74 + (0.6215 * temperature) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * temperature * Math.pow(windSpeed, 0.16));
        windChill = Math.round(chillCalc) + "°F";
    }

    // 2. Inject values into the HTML elements
    document.getElementById("temp-val").textContent = temperature + "°F";
    document.getElementById("cond-val").textContent = conditions;
    document.getElementById("wind-val").textContent = windSpeed + " mph";
    document.getElementById("chill-val").textContent = windChill;
}

// Example usage:
displayWeather(25, 15, "Partly Cloudy");
