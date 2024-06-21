import { deleteComment } from "../utils/api"

const DeleteButton = ({comment_id, setComments, comments, setIsDeleted, setIsDeletedId, author}) => {
    const user = "grumpy19"
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
       .catch((err) => console.log(err))
    }
    if (author !== user) {
        return null
    }


    return (
        <button
        className="delete-button"
        onClick={handleDelete}>X</button>
    )
}
export default DeleteButton