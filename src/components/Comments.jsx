import '../.css/Comments.css'

const Comments = ({comment, isDeleted, isDeletedId}) => {
    
    const handleUpVote = (event) => {
        event.preventDefault()
        console.log("upvote")
    }

    console.log(isDeletedId)

    if (isDeleted && isDeletedId === comment.comment_id) {
        console.log(isDeleted)
        return (<div>
                 <p>Comment Deleted!</p>
                </div>)
    } 

    return (
    <div>
        <p>{comment.body}</p>
        <div className='comment-author-and-votes'>
            <button>{comment.author}</button>
            <span className='comment-vote'>Votes:</span>
            <div id='votes' className='comment-votes'>
                <p>{comment.votes}</p>
                <button onClick={handleUpVote}>Upvote</button>
            </div>
        </div>
    </div>)
}

export default Comments