import { useNavigate, useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import { getArticlesById } from "../utils/api";
import '../.css/ArticlesById.css'
import CommentsList from "./CommentsList"
import VoteButton from "./VoteButton";

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
            <div>
                <span className="label">Description:</span>
                <p>{article.body}</p>
            </div>
            <div>
                <span className="label">Topic:</span>
                <p className="article-topic">{article.topic}</p>
            </div>
            <div>
                <span className="article-author">Author:</span>
                <p>{article.author}</p>
            </div>
            <VoteButton article={article} setArticle={setArticle}/>
            <CommentsList article_id={article_id}/>
        </div>)}
    </div>)
}

export default ArticleById