const yearEl = document.getElementById("currentyear");
const modEl = document.getElementById("lastModified");

if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
}

if (modEl) {
    modEl.textContent =
    "Last Modification: " + document.lastModified;
}

/* ---------------- MOBILE MENU ---------------- */

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});

/* ---------------- MEMBERS DIRECTORY ---------------- */

const url = "data/members.json";

const cards = document.querySelector("#members");

async function getMembers() {

    const response = await fetch(url);

    const data = await response.json();

    displayMembers(data);

    displaySpotlights(data);
}

getMembers();

const displayMembers = (members) => {

    members.forEach((member) => {

        let card = document.createElement("section");

        let name = document.createElement("h3");

        let address = document.createElement("p");

        let phone = document.createElement("p");

        let website = document.createElement("a");

        let image = document.createElement("img");

        let description = document.createElement("p");

        name.textContent = member.name;

        address.textContent = member.address;

        phone.textContent = member.phone;

        description.textContent = member.description;

        website.textContent = "Visit Website";

        website.setAttribute("href", member.website);

        website.setAttribute("target", "_blank");

        image.setAttribute("src", member.image);

        image.setAttribute("alt", member.name);

        image.setAttribute("loading", "lazy");

        card.appendChild(image);

        card.appendChild(name);

        card.appendChild(description);

        card.appendChild(address);

        card.appendChild(phone);

        card.appendChild(website);

        cards.appendChild(card);

    });
};

/* ---------------- GRID / LIST BUTTONS ---------------- */

const gridButton = document.querySelector("#grid");

const listButton = document.querySelector("#list");

gridButton.addEventListener("click", () => {

    cards.classList.add("grid");

    cards.classList.remove("list");

});

listButton.addEventListener("click", () => {

    cards.classList.add("list");

    cards.classList.remove("grid");

});

/* ---------------- WEATHER API ---------------- */

const key = "56b8b0161336c8a535c9e44906045a6f";

const weatherURL =
`https://api.openweathermap.org/data/2.5/weather?lat=20.5888&lon=-100.3899&units=metric&appid=${key}`;

const forecastURL =
`https://api.openweathermap.org/data/2.5/forecast?lat=20.5888&lon=-100.3899&units=metric&appid=${key}`;

async function apiFetch() {

    try {

        const response = await fetch(weatherURL);

        if (response.ok) {

            const data = await response.json();

            displayCurrentWeather(data);

        } else {

            throw Error(await response.text());

        }

    } catch (error) {

        console.log(error);

    }
}

function displayCurrentWeather(data) {

    const temp = document.querySelector("#current-temp");

    const icon = document.querySelector("#weather-icon");

    const caption = document.querySelector("figcaption");

    temp.innerHTML = `${data.main.temp.toFixed(1)}°C`;

    const iconsrc =
    `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;

    const desc = data.weather[0].description;

    icon.setAttribute("src", iconsrc);

    icon.setAttribute("alt", desc);

    caption.textContent = desc;
}

apiFetch();

/* ---------------- 3 DAY FORECAST ---------------- */

async function getForecast() {

    try {

        const response = await fetch(forecastURL);

        if (response.ok) {

            const data = await response.json();

            displayForecast(data);

        }

    } catch (error) {

        console.log(error);

    }
}

function displayForecast(data) {

    const forecastDays = data.list.filter(item =>
        item.dt_txt.includes("12:00:00")
    );

    document.querySelector("#day1").textContent =
    `Day 1: ${forecastDays[0].main.temp.toFixed(1)}°C`;

    document.querySelector("#day2").textContent =
    `Day 2: ${forecastDays[1].main.temp.toFixed(1)}°C`;

    document.querySelector("#day3").textContent =
    `Day 3: ${forecastDays[2].main.temp.toFixed(1)}°C`;
}

getForecast();

/* ---------------- SPOTLIGHTS ---------------- */

const spotlightContainer =
document.querySelector("#spotlight-container");

function displaySpotlights(members) {

    spotlightContainer.innerHTML = "";

    const premiumMembers = members.filter(member =>
        member.membership === 2 ||
        member.membership === 3
    );

    premiumMembers.sort(() => 0.5 - Math.random());

    const selectedMembers = premiumMembers.slice(0, 3);

    selectedMembers.forEach(member => {

        const card = document.createElement("section");

        let level = "";

        if (member.membership === 3) {

            level = "Gold";

        } else {

            level = "Silver";

        }

        card.innerHTML = `
            <h3>${member.name}</h3>

            <img src="${member.image}"
                 alt="${member.name} logo"
                 loading="lazy">

            <p>${member.address}</p>

            <p>${member.phone}</p>

            <a href="${member.website}" target="_blank">
                Visit Website
            </a>

            <p><strong>${level} Member</strong></p>
        `;

        spotlightContainer.appendChild(card);

    });
}