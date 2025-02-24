import { fetchNewsIds, fetchNewsDetails } from './api.js';
import { renderNews } from './ui.js';
import './style.css';

document.addEventListener('DOMContentLoaded', async () => {
    const container = document.getElementById('news-container');
    let newsIds = [];
    let currentIndex = 0;

    async function loadNews() {
        if (newsIds.length === 0) {
            newsIds = await fetchNewsIds();
        }

        const nextIds = newsIds.slice(currentIndex, currentIndex + 10);
        currentIndex += 10;

        const newsList = await fetchNewsDetails(nextIds);
        renderNews(newsList, container);
    }

    document.getElementById('load-more-btn').addEventListener('click', loadNews);

    // Carica le prime news al caricamento della pagina
    loadNews();
});
