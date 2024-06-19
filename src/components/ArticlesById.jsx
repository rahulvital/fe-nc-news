import { useNavigate, useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import { getArticlesById } from "../utils/api";
import '../.css/ArticlesById.css'

const ArticleById = () => {
    const { article_id } = useParams()
    const navigate = useNavigate()
    const [article, setArticle] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    
    useEffect(( )=> {
        setIsLoading(true)
        getArticlesById(article_id)
        .then((articleIdResponse) => {
            setArticle(articleIdResponse.data.article)
            setIsLoading(false)
        })
    }, [article_id])

    if (isLoading){
        return <div>Loading...</div>
    }
    
    return (
    <div className="individual-article">
        <button onClick={() => navigate('/')}>Back to Home</button>
        {article && (<div className="article-section">
            <h2>{article.title}</h2>
            <img src={article.article_img_url} alt={article.description}></img>
            <label>Description:</label>
            <p>{article.body}</p>
            <label>Topic:</label>
            <p>{article.topic}</p>
            <label>Author:</label>
            <p>{article.author}</p>
            <label>Votes:</label>
            <p>{article.votes}</p>
        </div>)}
    </div>)
}

export default ArticleById