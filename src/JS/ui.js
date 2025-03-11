export function renderNews(newsList, container) {
    newsList.forEach(news => {
        const newsItem = document.createElement('div');
        newsItem.classList.add('news-item');
        newsItem.innerHTML = `
            <h2><a href="${news.url}" target="_blank">${news.title}</a></h2>
            <p>${new Date(news.time * 1000).toLocaleDateString()}</p>
        `;
        container.appendChild(newsItem);
    });
}
