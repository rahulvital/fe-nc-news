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
                <input id='add-comment-placeholder' placeholder='Add comment here...'></input>
                <ul>
                    {comments.map((comment) => {
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