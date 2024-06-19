import '../.css/Articles.css'
import { useNavigate } from 'react-router-dom';

const Articles = ({article, setFilter}) => {
    const navigate = useNavigate()
    
    const handleArticleChange = (event) => {
        event.preventDefault()
        console.log({article})
        
        setFilter(article.article_id)
    }

    return (
        <li className="articles">
            <img src={article.article_img_url} alt={article.title}></img>
            <p onClick={handleArticleChange}>{article.title}</p>
            <button id='article-button' onClick={() => navigate(`/articles/${article.article_id}`)}>See more...</button>
            
        </li>
    )
}

export default Articles