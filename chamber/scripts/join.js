const timestamp = document.querySelector("#timestamp");

if (timestamp) {

    timestamp.value = new Date().toISOString();
}

/* MODALS */

const npModal = document.querySelector("#npModal");
const bronzeModal = document.querySelector("#bronzeModal");
const silverModal = document.querySelector("#silverModal");
const goldModal = document.querySelector("#goldModal");

document.querySelector("#openNP")
.addEventListener("click", () => {

    npModal.showModal();
});

document.querySelector("#openBronze")
.addEventListener("click", () => {

    bronzeModal.showModal();
});

document.querySelector("#openSilver")
.addEventListener("click", () => {

    silverModal.showModal();
});

document.querySelector("#openGold")
.addEventListener("click", () => {

    goldModal.showModal();
});

document.querySelectorAll(".closeBtn")
.forEach(button => {

    button.addEventListener("click", () => {

        button.parentElement.close();
    });
});