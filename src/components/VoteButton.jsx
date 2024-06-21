import { useState } from "react"
import { patchUpVote } from "../utils/api"
import '../css/VoteButton.css'

const VoteButton = ({article, setArticle}) => {
    const [voteClicked, setVoteClicked] = useState(true)

    const handleUpVotes = async (event) => {
        event.preventDefault()
        setVoteClicked(!voteClicked)
        if (voteClicked) {
            const updatedArticle = {...article, votes: article.votes +1}
            setArticle(updatedArticle)
            patchUpVote(article.article_id, {inc_votes: 1})
            .then((response) => {
                console.log(response.data.article, "upvote")
            })
            .catch((err) => console.log(err))
        } else {
            const updatedArticle = {...article, votes: article.votes -1}
            setArticle(updatedArticle)
            patchUpVote(article.article_id, {inc_votes: -1})
            .then((response) => {
                
            })
            .catch((err) => console.log(err))
        }
    }

    return (
        <div name='votes' className='comment-votes'>
            <span>Votes:</span>
            <p>{article.votes}</p>
            <button onClick={handleUpVotes} className={voteClicked?"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded":"vote-unclicked"}>
                {voteClicked?"Upvote":"Upvoted!"}
            </button>
        </div>)
}

export default VoteButton;