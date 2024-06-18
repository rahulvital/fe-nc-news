import { useState, useEffect } from 'react'
import '../.css/ArticlesList.css'
import Articles from './Articles'
import axios from 'axios'

const ArticlesList = () => {
    const [articles, setArticles] = useState([])
    const [topics, setTopics] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        axios
        .get('https://rahul-vital-be-nc-news.onrender.com/api/articles')
        .then((articlesResponse) => {
            setArticles(articlesResponse.data.articles)
        })

        axios
        .get('https://rahul-vital-be-nc-news.onrender.com/api/topics')
        .then((topicsResponse) => {
            setTopics(topicsResponse.data.topics)
            setIsLoading(false)
        })

    }, [])

    if (isLoading){
        return (
        <section>
            <div>Loading...</div>
            <div id='loading'></div>
        </section>)
    }
    return (
    <div className="articles-list">
        <div className='title'>
            <h2>Articles:</h2>
            <select className='topics-list'>
                {topics.map((topic)=>{
                    return <option key={topic.slug} value={topic.slug}>{topic.slug}</option>
                })}
            </select>
        </div>
        <ul className='ul'>
            {articles.map((article) => 
            <Articles key={article.article_id} article={article}/>)}
        </ul>
    </div>
    )
}
 
export default ArticlesList

