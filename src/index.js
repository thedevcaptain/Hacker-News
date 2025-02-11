import axios from 'axios';
import './style.css';

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('news-container');
    let newsIds = [];
    let currentIndex = 0;

    // Funzione per ottenere i dati delle notizie
    async function fetchNews() {
        try {
            if (newsIds.length === 0) {
                // Recupera i primi 500 ID delle notizie
                const response = await axios.get('https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty');
                newsIds = response.data;
            }

            // Prende i prossimi 10 ID delle notizie
            const topTenIds = newsIds.slice(currentIndex, currentIndex + 10);
            currentIndex += 10;

            // Recupera i dettagli delle notizie
            const newsPromises = topTenIds.map(id => axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`));
            const newsResponses = await Promise.all(newsPromises);

            // Visualizza le notizie
            newsResponses.forEach(newsRes => {
                const news = newsRes.data;
                const newsItem = document.createElement('div');
                newsItem.classList.add('news-item');

                newsItem.innerHTML = `
                    <h2>${news.title}</h2>
                    <a href="${news.url}" target="_blank">Leggi di più</a>
                    <p class="date">${new Date(news.time * 1000).toLocaleString()}</p>
                `;
                container.appendChild(newsItem);
            });
        } catch (error) {
            console.error('Errore nel recupero delle notizie:', error);
        }
    }

    // Carica le prime 10 notizie all'avvio
    fetchNews();

    // Gestisci il clic su "Load More"
    document.getElementById('load-more-btn').addEventListener('click', fetchNews);
});
