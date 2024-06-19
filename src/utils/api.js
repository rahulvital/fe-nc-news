import axios from 'axios';

const API_URL = 'https://rahul-vital-be-nc-news.onrender.com/api';

export const getArticles = async () => {
  const response = await axios.get(`${API_URL}/articles`);
  return response.data;
};

export const getArticlesById = async (article_id) => {
    const articleById = await axios.get(`${API_URL}/articles/${article_id}`);
    return articleById
}