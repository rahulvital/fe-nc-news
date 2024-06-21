import { useNavigate } from 'react-router-dom'
import '../css/Topics.css'
import codingImg from '../assets/coding.gif'
import footballImg from '../assets/football.gif'
import cookingImg from '../assets/cooking.gif'

const Topics = ({topic}) => {
    const navigate = useNavigate()

    const images = {
        coding: codingImg,
        football: footballImg,
        cooking: cookingImg
    }

    const topicImg = images[topic.slug]

    const topicTitle = topic.slug.charAt(0).toUpperCase() + topic.slug.slice(1)

    return (
        <li className="topics" key={topic.slug} onClick={() => navigate(`/articles?search=${topic.slug}`)}>
            <img src={topicImg} alt={topic.slug}/>
            <div className='topic-box'>
                <h1 className='topic-title'>{topicTitle}</h1>
                <p>{topic.description}</p>
            </div>
        </li>
    )
}

export default Topics