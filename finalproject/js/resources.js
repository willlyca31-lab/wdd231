
import './main.js';

const container =
  document.querySelector('#articles-container');

const modal =
  document.querySelector('#article-modal');

const modalContent =
  document.querySelector('#modal-content');

const closeModal =
  document.querySelector('#close-modal');


async function getArticles() {

  try {

    const response =
      await fetch('./data/articles.json');

    if (!response.ok) {

      throw new Error('Articles not found');
    }

    const data = await response.json();

    displayArticles(data);

  } catch(error) {

    console.error(error);
  }
}


function displayArticles(data) {

  data.forEach((article) => {

    const card =
      document.createElement('article');

    card.classList.add('article-card');

    card.innerHTML = `

      <h2>${article.title}</h2>

      <p>
        <strong>Category:</strong>
        ${article.category}
      </p>

      <p>
        <strong>Author:</strong>
        ${article.author}
      </p>

      <p>${article.description}</p>

      <button class="view-more">
        View More
      </button>
    `;


    const button =
      card.querySelector('.view-more');


    button.addEventListener('click', () => {

      modalContent.innerHTML = `

        <h2>${article.title}</h2>

        <p>
          <strong>Category:</strong>
          ${article.category}
        </p>

        <p>
          <strong>Author:</strong>
          ${article.author}
        </p>

        <p>${article.content}</p>
      `;

      modal.showModal();
    });

    container.appendChild(card);
  });
}


closeModal.addEventListener('click', () => {

  modal.close();
});


getArticles();
