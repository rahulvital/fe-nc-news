import axios from 'axios';

const API_URL = 'https://rahul-vital-be-nc-news.onrender.com/api';

export const getArticles = async (sort_by = "created_at", order = "desc") => {
  try {
    const response = await axios.get(`${API_URL}/articles`, {params: { sort_by, order }});
    return response.data;
  }
  catch (err) {
    console.log("getArticles error", err)
  }
};

export const getArticlesById = async (article_id) => {
  try {
      const articleById = await axios.get(`${API_URL}/articles/${article_id}`);
      return articleById
    }
    catch (err) {
      console.log("getArticlesById", err)
    }
}

export const getCommentsByArticle = async (article_id) => {
  try {
    const commentsByArticle = await axios.get(`${API_URL}/articles/${article_id}/comments`)
    return commentsByArticle
  }
  catch (err) {
    console.log("getCommentsByArticle", err)
  }
}

export const patchUpVote = async (article_id, {inc_votes}) => {
  try {
    const upVote = await axios.patch(`${API_URL}/articles/${article_id}`, {inc_votes})
    return upVote
  }
  catch (err) {
    console.log("patchUpVote", err)
  }
}

export const postNewComment = async (article_id, { body }) => {
  try {
    const username = "grumpy19"
    const addComment = await axios.post(`${API_URL}/articles/${article_id}/comments`, {username: username, body: body})
    return addComment
  }
  catch (err) {
    console.log("postNewComment", err)
  }
}

export const deleteComment = async ({comment_id}) => {
  try {
    const CommentsByArticle = await axios.delete(`${API_URL}/comments/${comment_id}`)
    return CommentsByArticle
  }
  catch (err) {
    console.log("deleteComment", err)
  }
}

export const getTopics = async () => {
  try {
    const topics = await axios.get(`${API_URL}/topics`)
    return topics

  }
  catch (err) {
    console.log("getTopics", err)
  }
}

export const getArticlesByTopic = async () => {
  try {
    const articleById = await axios.get(`${API_URL}/articles`);
    return articleById

  }
  catch (err) {
    console.log("getArticlesByTopic", err)
  }
}