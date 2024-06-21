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
  const commentsByArticle = await axios.get(`${API_URL}/articles/${article_id}/comments`)
  return commentsByArticle
}

export const patchUpVote = async (article_id, {inc_votes}) => {
  const upVote = await axios.patch(`${API_URL}/articles/${article_id}`, {inc_votes})
  return upVote
}

export const postNewComment = async (article_id, { body }) => {
  const username = "grumpy19"
  const addComment = await axios.post(`${API_URL}/articles/${article_id}/comments`, {username: username, body: body})
  return addComment

}

export const deleteComment = async ({comment_id}) => {
  const CommentsByArticle = await axios.delete(`${API_URL}/comments/${comment_id}`)
  return CommentsByArticle
}

export const getTopics = async () => {
  const topics = await axios.get(`${API_URL}/topics`)
  return topics
}

export const getArticlesByTopic = async (topic) => {
  const articleById = await axios.get(`${API_URL}/articles`);
  return articleById
}