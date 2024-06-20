import { useState, useEffect } from 'react'
import '../.css/CommentsAdder.css'
import { postNewComment } from '../utils/api'


const CommentsAdder = ({article_id, setComments, comments}) => {
    const [newComment, setNewComment] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [validation, setValidation] = useState(true)

    const handleNewComment = (event) => {
        event.preventDefault()
        if (newComment.length > 0){
            setValidation(true)
            setIsLoading(true)
            postNewComment(article_id, {body: newComment})
            .then((postCommentResponse) => {
                setNewComment("")
                setComments([postCommentResponse.data.comment, ...comments])
                setIsLoading(false)
            })
        } else {
            setValidation(false)
        }

    }

    if (isLoading) (<div>Loading</div>)

    return (
    <div className='comment-box'>
        <label className='label' htmlFor='comment-placeholder' >Add your thoughts!</label>
        <form name='coment-form' id="comment-form" onSubmit={handleNewComment}>
            <input onChange={event => setNewComment(event.target.value)} id='comment-placeholder' placeholder='Add comment here...' value={newComment}></input>
            {validation ? null: <p className='invalid-input'>This field is required</p>}
            
            <button>Submit</button>
        </form>
    </div>
    )
}

export default CommentsAdder