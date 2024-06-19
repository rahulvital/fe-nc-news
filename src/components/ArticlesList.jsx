import { useState, useEffect } from 'react'
import '../.css/ArticlesList.css'
import Articles from './Articles'
import { getArticles } from '../utils/api'

const ArticlesList = () => {
    const [articles, setArticles] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    
    useEffect(() => {
        setIsLoading(true)
        getArticles()
        .then((articlesResponse) => {
            setArticles(articlesResponse.articles)
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
            <h2>Articles:</h2>
        </div>
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

