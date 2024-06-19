import { useState, useEffect } from 'react'
import {getCommentsByArticle} from '../utils/api'
import '../.css/CommentsList.css'
import Comments from './Comments'

const CommentsList = ({ article_id }) => {
    const [comments, setComments] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    
    useEffect(() => {
        setIsLoading(true)
        getCommentsByArticle(article_id)
        .then((commentsResponse) => {
            console.log(commentsResponse.data.comments)
            setComments(commentsResponse.data.comments)
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
        <div className="comments-list">
            <div className='title'>
                <h2>Comments:</h2>
                <input placeholder='Add comment here...'></input>
                <ul>
                    {comments.map((comment) => {
                        console.log(comment)
                        return (
                        <li key={comment.comment_id} className='comment'>
                            <Comments comment={comment} />
                        </li>)
                    })}
                </ul>
            </div>
            <ul className='ul'>
                
            </ul>
        </div>
        )
}

export default CommentsList;