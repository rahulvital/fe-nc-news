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

export const getCommentsByArticle = async (article_id) => {
  const CommentsByArticle = await axios.get(`${API_URL}/articles/${article_id}/comments`)
  return CommentsByArticle
}

export const patchUpVote = async (article_id, {inc_votes}) => {
  const upVote = await axios.patch(`${API_URL}/articles/${article_id}`, {inc_votes})
  return upVote
}