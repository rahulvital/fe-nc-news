import { useState, useEffect } from 'react'
import '../css/ArticlesList.css'
import Articles from './Articles'
import { getArticles } from '../utils/api'

const ArticlesList = () => {
    const [articles, setArticles] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [order, setOrder] = useState("desc")
    const [sortBy, setSortBy] = useState("created_at")
    
    useEffect(() => {
        setIsLoading(true)
        getArticles(sortBy, order)
        .then((articlesResponse) => {
            setArticles(articlesResponse.articles)
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
            <h2>Articles:</h2>
        </div>
        <label htmlFor='sort-dropdown'>Sort By:</label>
        <select id='sort-dropdown' className='sort-dropdown' onChange={handleSortChange}>
            <option key='date' value='created_at'>Date</option>
            <option key='comment-count' value='comment_count'>Comments</option>
            <option key='votes' value='votes'>Votes</option>
        </select>
        <label htmlFor='order-dropdown'>Order By:</label>
        <select id='order-dropdown' className='order-dropdown' onChange={handleOrderChange}>
            <option key='asc' value='asc'>Asc</option>
            <option key='desc' value='desc'>Desc</option>
        </select>
        <ul className='ul'>
            {articles.map((article) => {
                if (article.article_id) {
                    return (<Articles key={article.article_id} article={article}/>)}})   
            }
        </ul>
    </div>
    )
}
 
export default ArticlesList

