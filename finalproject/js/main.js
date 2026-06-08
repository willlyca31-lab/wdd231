const year = document.querySelector('#year');

if(year) {
  year.textContent = new Date().getFullYear();
}

const lastModified = document.querySelector('#lastModified');

if(lastModified) {
  lastModified.textContent = `Last Modified: ${document.lastModified}`;
}

const confirmationResults = document.querySelector('#confirmation-results');

if (confirmationResults) {

  const params = new URLSearchParams(window.location.search);

  confirmationResults.innerHTML = `
    <p><strong>Name:</strong> ${params.get('fullname')}</p>

    <p><strong>Email:</strong> ${params.get('email')}</p>

    <p><strong>Phone:</strong> ${params.get('phone')}</p>

    <p><strong>Specialty:</strong> ${params.get('specialty')}</p>

    <p><strong>Message:</strong> ${params.get('message')}</p>
  `;
}
