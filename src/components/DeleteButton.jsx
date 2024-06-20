import { deleteComment } from "../utils/api"

const DeleteButton = ({comment_id, setComments, comments, setIsDeleted, setIsDeletedId}) => {
    
    const handleDelete = (event) => {
        event.preventDefault()
        const remainingComments = comments.filter(comment => comment.comment_id !== comment_id)
        setComments(remainingComments)
        setIsDeleted(true)
        setIsDeletedId(comment_id)
        
        deleteComment({comment_id})
        .then((deleteResponse) => {
            setIsDeleted(false)
            setIsDeletedId(0)
       })
   }

    return (
        <button
        className="delete-button"
        onClick={handleDelete}>X</button>
    )
}
export default DeleteButton