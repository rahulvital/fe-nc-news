import '../.css/Comments.css'

const Comments = ({comment}) => {
    
    const handleUpVote = (event) => {
        event.preventDefault()
        console.log("upvote")
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