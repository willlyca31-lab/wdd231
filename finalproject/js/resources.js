
import './main.js';

const container = document.querySelector('#articles-container');

async function getArticles() {

  try {

    const response = await fetch('./data/articles.json');

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

    const card = document.createElement('article');

    card.classList.add('article-card');

    card.innerHTML = `
      <h2>${article.title}</h2>

      <p><strong>Category:</strong> ${article.category}</p>

      <p><strong>Author:</strong> ${article.author}</p>

      <p>${article.description}</p>
    `;

    container.appendChild(card);
  });
}

getArticles();
