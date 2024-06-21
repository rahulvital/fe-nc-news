import { useState, useEffect } from 'react'
import {getCommentsByArticle} from '../utils/api'
import '../css/CommentsList.css'
import Comments from './Comments'
import DeleteButton from './DeleteButton'
import CommentAdder from './CommentAdder'

const CommentsList = ({ article_id }) => {
    const [comments, setComments] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    const [isDeleted, setIsDeleted] =useState(false)
    const [isDeletedId, setIsDeletedId] = useState(0)

    useEffect(() => {
        setIsLoading(true)
        setIsDeleted(false)
        getCommentsByArticle(article_id)
        .then((commentsResponse) => {
            setComments(commentsResponse.data.comments)
            setIsLoading(false)
        })
    }, [article_id])

    if (isLoading){
        return (
        <section>
            <div id='loading'></div>
        </section>)
    }

    return (
        <div className="comments-list">
            <div className='title'>
                <CommentAdder article_id={article_id} setComments={setComments} comments={comments}/>
                <ul>
                    {comments.map((comment) => {
                        return (
                        <li key={comment.comment_id} className='comment'>
                            <Comments comment={comment} isDeleted={isDeleted} isDeletedId={isDeletedId}/>
                            <DeleteButton setIsDeleted={setIsDeleted} comment_id={comment.comment_id} comments={comments}
                                setComments={setComments} setIsDeletedId={setIsDeletedId} author={comment.author} />
                        </li>)
                    })}
                </ul>
            </div>
        </div>
        )
}

export default CommentsList;