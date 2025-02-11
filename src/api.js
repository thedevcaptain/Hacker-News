import axios from 'axios';

const BASE_URL = 'https://hacker-news.firebaseio.com/v0';

export async function fetchNews() {
    const response = await axios.get(`${BASE_URL}/newstories.json`);
    const newsIds = response.data.slice(0, 10); // Prendi solo le prime 10 news
    const newsDetails = await Promise.all(
        newsIds.map(id => axios.get(`${BASE_URL}/item/${id}.json`))
    );
    return newsDetails.map(res => res.data);
}
