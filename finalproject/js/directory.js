const container = document.querySelector('#directory-container');

const modal = document.querySelector('#profile-modal');

const modalContent = document.querySelector('#modal-content');

const closeModal = document.querySelector('#close-modal');

async function getPsychologists() {

  try {

    const response = await fetch('./data/psychologists.json');

    if (!response.ok) {
      throw new Error('Data not found');
    }

    const data = await response.json();

    displayPsychologists(data);

  } catch(error) {

    console.error(error);
  }
}

function displayPsychologists(data) {

  data.forEach((psychologist) => {

    const card = document.createElement('article');

    card.classList.add('directory-card');

    card.innerHTML = `
      <img
        src="${psychologist.image}"
        alt="${psychologist.name}"
        loading="lazy"
        width="300"
        height="300"
      >

      <h2>${psychologist.name}</h2>

      <p><strong>Specialty:</strong> ${psychologist.specialty}</p>

      <p><strong>Location:</strong> ${psychologist.location}</p>

      <p><strong>Experience:</strong> ${psychologist.experience}</p>

      <button>View Profile</button>
    `;

    const button = card.querySelector('button');

    button.addEventListener('click', () => {

      modalContent.innerHTML = `
        <h2>${psychologist.name}</h2>

        <p>${psychologist.bio}</p>
      `;

      modal.showModal();
    });

    container.appendChild(card);
  });
}

closeModal.addEventListener('click', () => {
  modal.close();
});

getPsychologists();

