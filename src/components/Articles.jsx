import '../css/Articles.css'
import { useNavigate } from 'react-router-dom';

const Articles = ({article}) => {
    const navigate = useNavigate()

    return (
        <li className="articles">
            <img src={article.article_img_url} alt={article.title}></img>
            <p>{article.title}</p>
            <button id='article-button' onClick={() => navigate(`/articles/${article.article_id}`)}>Read now</button>
        </li>
    )
}

export default Articles