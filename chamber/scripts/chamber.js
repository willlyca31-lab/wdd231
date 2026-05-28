
const apiKey = "YOUR_API_KEY";
const city = "Queretaro";
const country = "MX";

const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=metric&appid=${apiKey}`;

async function getWeather() {
    try {

        const response = await fetch(url);

        if (!response.ok) {
            throw Error(await response.text());
        }

        const data = await response.json();

        displayWeather(data);

    } catch (error) {
        console.log("Error fetching weather:", error);
    }
}

function displayWeather(data) {

    const temperature = data.main.temp;
    const description = data.weather[0].description;
    const windSpeed = data.wind.speed;
    const humidity = data.main.humidity;

    const iconCode = data.weather[0].icon;
    const iconUrl =
        `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

    document.querySelector("#temp").textContent =
        Math.round(temperature);

    document.querySelector("#description").textContent =
        description;

    document.querySelector("#wind").textContent =
        windSpeed;

    document.querySelector("#humidity").textContent =
        humidity;

    document.querySelector("#weather-icon").src =
        iconUrl;

    document.querySelector("#weather-icon").alt =
        description;

    calculateWindChill(temperature, windSpeed);
}

function calculateWindChill(temp, speed) {

    let chill = "N/A";

    if (temp <= 10 && speed > 4.8) {

        chill =
            (
                13.12 +
                0.6215 * temp -
                11.37 * Math.pow(speed, 0.16) +
                0.3965 * temp * Math.pow(speed, 0.16)
            ).toFixed(1) + " °C";
    }

    document.querySelector("#windchill").textContent =
        chill;
}

getWeather();

document.querySelector("#currentyear").textContent =
    new Date().getFullYear();



document.querySelector("#lastModified").textContent =
    `Last Modification: ${document.lastModified}`;


const menuButton = document.querySelector("#menu");

const navigation = document.querySelector(".navigation");

menuButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
});

const apiKey = "YOUR_API_KEY";
const weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=Queretaro,mx&units=metric&appid=${apiKey}`;


const url = "data/members.json";

const cards = document.querySelector("#members");

async function getMembers() {

    const response = await fetch(url);

    const data = await response.json();

    displayMembers(data);
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