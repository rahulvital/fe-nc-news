import { useState } from "react"
import { postNewComment } from "../utils/api"
import '../css/CommentAdder.css'

const CommentAdder = ({article_id, setComments, comments}) => {

    const [newComment, setNewComment] = useState("")
    const [validation, setValidation] = useState(true)

    const handleNewComment = (event) => {
        event.preventDefault()
        if (newComment.length>0){
            setValidation(true)

            const commentToAdd = { body: newComment, author: "grumpy19", votes: 0, comment_id: Date.now() }
            setComments([commentToAdd, ...comments])
            postNewComment(article_id, {body: newComment})
            .then((response) => {
                setNewComment("")
            })
        } else {
            setValidation(false)
        }
    }
    return (
        <div className='comment-box'>
            <label className='label' htmlFor='comment-placeholder' aria-label='This is a required field'>Add your thoughts! *</label>
            <form name='coment-form' id="comment-form" onSubmit={handleNewComment}>
                <input className="comment-body" onChange={event => setNewComment(event.target.value)} id='comment-placeholder' placeholder='Add comment here...' value={newComment}></input>
                <p className="invalid-input">{validation?null:"This field is required"}</p>
                <button>Submit</button>
            </form>
        </div>
        )
}

export default CommentAdder