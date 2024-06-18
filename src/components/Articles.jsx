import '../.css/Articles.css'

const Articles = ({article}) => {
    return (
        <li className="articles">
            <img src={article.article_img_url}></img>
            <p>{article.title}</p>
        </li>
    )
}

export default Articles