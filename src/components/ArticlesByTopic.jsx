import { useEffect, useState } from "react"
import { getArticles } from "../utils/api"
import { useLocation, useNavigate } from "react-router-dom"

const ArticlesByTopic = () => {
    const [articles, setArticles] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [articlesByTopic, setArticlesByTopic]= useState("")
    const location = useLocation()
    const navigate = useNavigate()


    useEffect(() => {
        const searchParams = new URLSearchParams(location.search)
        const topic = searchParams.get('search')
        setArticlesByTopic(topic.charAt(0).toUpperCase() + topic.slice(1))
        
        setIsLoading(true)
        getArticles()
        .then((articlesResponse) => {
            const filteredArticles = articlesResponse.articles.filter((articles) => articles.topic === topic)
            
            setArticles(filteredArticles)
            setIsLoading(false)
        })
    }, [])

    if (isLoading){
        return (
        <section>
            <div id='loading'></div>
        </section>)
    }

    return (
    <div className="articles-list">
        <div className='title'>
            <h2>Articles in {articlesByTopic}</h2>
        </div>
        <ul className='ul' >
            {articles.map((article) => {
                return (
                <li key={article.article_id} className="articles">
                    <img src={article.article_img_url} alt={article.title}></img>
                    <p>{article.title}</p>
                    <button id='article-button' onClick={() => navigate(`/articles/${article.article_id}`)}>Read now</button>
                </li>
                )})   
            }
        </ul>
    </div>
    )
}

export default ArticlesByTopic