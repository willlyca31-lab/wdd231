const timestamp =
document.querySelector("#timestamp");

if (timestamp) {

    timestamp.value =
    new Date().toISOString();
}

/* ---------------- MODALS ---------------- */

const npModal =
document.querySelector("#npModal");

const bronzeModal =
document.querySelector("#bronzeModal");

const silverModal =
document.querySelector("#silverModal");

const goldModal =
document.querySelector("#goldModal");

const openNP =
document.querySelector("#openNP");

const openBronze =
document.querySelector("#openBronze");

const openSilver =
document.querySelector("#openSilver");

const openGold =
document.querySelector("#openGold");

/* NP */

if (openNP && npModal) {

    openNP.addEventListener("click", () => {

        npModal.showModal();
    });
}

/* BRONZE */

if (openBronze && bronzeModal) {

    openBronze.addEventListener("click", () => {

        bronzeModal.showModal();
    });
}

/* SILVER */

if (openSilver && silverModal) {

    openSilver.addEventListener("click", () => {

        silverModal.showModal();
    });
}

/* GOLD */

if (openGold && goldModal) {

    openGold.addEventListener("click", () => {

        goldModal.showModal();
    });
}

/* CLOSE BUTTONS */

document.querySelectorAll(".closeBtn")
.forEach(button => {

    button.addEventListener("click", () => {

        button.parentElement.close();
    });
});
