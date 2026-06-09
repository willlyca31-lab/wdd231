const year = document.querySelector('#year');

if(year) {
  year.textContent = new Date().getFullYear();
}

const lastModified = document.querySelector('#lastModified');

if(lastModified) {
  lastModified.textContent = `Last Modified: ${document.lastModified}`;
}

const confirmationResults =
    document.querySelector('#confirmation-results');

 if (confirmationResults) {

    const params =
        new URLSearchParams(window.location.search);

    if (params.get('fullname')) {

        confirmationResults.innerHTML = `

            <h2>Appointment Request Submitted</h2>

            <p>
                <strong>Name:</strong>
                ${params.get('fullname')}
            </p>

            <p>
                <strong>Email:</strong>
                ${params.get('email')}
            </p>

            <p>
                <strong>Phone:</strong>
                ${params.get('phone')}
            </p>

            <p>
                <strong>Specialty:</strong>
                ${params.get('specialty')}
            </p>

            <p>
                <strong>Message:</strong>
                ${params.get('message')}
            </p>
        `;
    }


    if (params.get('psychologist-name')) {

        confirmationResults.innerHTML = `

            <h2>
                Psychologist Application Submitted
            </h2>

            <p>
                <strong>Name:</strong>
                ${params.get('psychologist-name')}
            </p>

            <p>
                <strong>License Number:</strong>
                ${params.get('license')}
            </p>

            <p>
                <strong>Specialization:</strong>
                ${params.get('specialization')}
            </p>

            <p>
                <strong>Experience:</strong>
                ${params.get('experience')} years
            </p>

            <p>
                <strong>Email:</strong>
                ${params.get('psychologist-email')}
            </p>

            <p>
                <strong>Biography:</strong>
                ${params.get('bio')}
            </p>
        `;
    }
}
