export function renderNews(newsList) {
    const container = document.getElementById('news-container');
    container.innerHTML = ''; // Svuota il contenitore prima di riempirlo

    newsList.forEach(news => {
        const newsItem = document.createElement('div');
        newsItem.innerHTML = `
            <h2><a href="${news.url}" target="_blank">${news.title}</a></h2>
            <p>${new Date(news.time * 1000).toLocaleDateString()}</p>
        `;
        container.appendChild(newsItem);
    });
}
