import { useEffect, useState } from "react"
import { getArticles } from "../utils/api"
import { useLocation, useNavigate } from "react-router-dom"

const ArticlesByTopic = () => {
    const [articles, setArticles] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [articlesByTopic, setArticlesByTopic]= useState("")
    const [order, setOrder] = useState("desc")
    const [sortBy, setSortBy] = useState("created_at")

    const location = useLocation()
    const navigate = useNavigate()


    useEffect(() => {
        const searchParams = new URLSearchParams(location.search)
        const topic = searchParams.get('search')
        setArticlesByTopic(topic.charAt(0).toUpperCase() + topic.slice(1))
        setIsLoading(true)

        getArticles(sortBy, order)
        .then((articlesResponse) => {
            const filteredArticles = articlesResponse.articles.filter((articles) => articles.topic === topic)
            
            setArticles(filteredArticles)
            setIsLoading(false)
        })
    }, [order, sortBy])

    const handleOrderChange = (event) => {
        event.preventDefault()
        setOrder(event.target.value)
    }

    const handleSortChange = (event) => {
        event.preventDefault()
        setSortBy(event.target.value)
    }

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
        <select id='sort-dropdown' className='sort-dropdown' onChange={handleSortChange}>
            <option key='sort-by' value=''>Sort By:</option>
            <option key='date' value='created_at'>Date</option>
            <option key='comment-count' value='comment_count'>Comment Count</option>
            <option key='votes' value='votes'>Votes</option>
        </select>
        <select id='order-dropdown' className='order-dropdown' onChange={handleOrderChange}>
            <option key='order' value=''>Order:</option>
            <option key='asc' value='asc'>Asc</option>
            <option key='desc' value='desc'>Desc</option>
        </select>
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