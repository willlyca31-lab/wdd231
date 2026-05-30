const params = new URLSearchParams(window.location.search);

document.querySelector("#fname").textContent =
params.get("firstname");

document.querySelector("#lname").textContent =
params.get("lastname");

document.querySelector("#email").textContent =
params.get("email");

document.querySelector("#phone").textContent =
params.get("phone");

document.querySelector("#business").textContent =
params.get("organization");

document.querySelector("#date").textContent =
params.get("timestamp");