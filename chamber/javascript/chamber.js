// CURRENT YEAR

document.querySelector("#currentyear").textContent =
    new Date().getFullYear();


// LAST MODIFIED

document.querySelector("#lastModified").textContent =
    `Last Modification: ${document.lastModified}`;



// MOBILE MENU

const menuButton = document.querySelector("#menu");

const navigation = document.querySelector(".navigation");

menuButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
});



// FETCH MEMBERS

const url = "data/members.json";

const cards = document.querySelector("#members");

async function getMembers() {

    const response = await fetch(url);

    const data = await response.json();

    displayMembers(data);
}

getMembers();



// DISPLAY MEMBERS

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



// GRID AND LIST BUTTONS

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