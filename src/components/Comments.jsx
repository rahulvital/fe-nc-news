import '../.css/Comments.css'

const Comments = ({comment}) => {
    return (
    <div>
        <p>{comment.body}</p>
        <div className='comment-author-and-votes'>
            <button>{comment.author}</button>
            <label htmlFor='votes'>Votes:</label>
            <p name='votes'>{comment.votes}</p>
        </div>
    </div>)
}

export default Comments