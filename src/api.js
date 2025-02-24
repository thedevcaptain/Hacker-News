import axios from 'axios';

const BASE_URL = 'https://hacker-news.firebaseio.com/v0';

export async function fetchNewsIds() {
    try {
        const response = await axios.get(`${BASE_URL}/newstories.json`);
        return response.data; 
    } catch (error) {
        console.error('Errore nel recupero degli ID delle news:', error);
        return [];
    }
}

export async function fetchNewsDetails(newsIds) {
    try {
        const newsPromises = newsIds.map(id =>
            axios.get(`${BASE_URL}/item/${id}.json`)
        );
        const newsResponses = await Promise.all(newsPromises);
        return newsResponses.map(res => res.data);
    } catch (error) {
        console.error('Errore nel recupero dei dettagli delle news:', error);
        return [];
    }
}
