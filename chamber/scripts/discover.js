import { places } from "../data/discover.mjs";

const container = document.querySelector("#discover-container");

places.forEach((place, index) => {

    const card = document.createElement("article");
    card.classList.add("card");
    card.classList.add(`card${index + 1}`);

    card.innerHTML = `
        <h2>${place.title}</h2>

        <figure>
            <img 
                src="${place.image}" 
                alt="${place.title}"
                loading="lazy"
                width="300"
                height="200">
        </figure>

        <address>${place.address}</address>

        <p>${place.description}</p>

        <button>Learn More</button>
    `;

    container.appendChild(card);
});


// LOCAL STORAGE VISITOR MESSAGE

const message = document.querySelector("#visit-message");

const lastVisit = localStorage.getItem("lastVisit");

const currentDate = Date.now();

if (!lastVisit) {

    message.textContent =
        "Welcome! Let us know if you have any questions.";

} else {

    const milliseconds = currentDate - Number(lastVisit);

    const daysBetween = Math.floor(
        milliseconds / 1000 / 60 / 60 / 24
    );

    if (daysBetween < 1) {

        message.textContent =
            "Back so soon! Awesome!";

    } else if (daysBetween === 1) {

        message.textContent =
            "You last visited 1 day ago.";

    } else {

        message.textContent =
            `You last visited ${daysBetween} days ago.`;
    }
}

localStorage.setItem("lastVisit", currentDate);