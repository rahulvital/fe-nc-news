import { useEffect, useState } from "react"
import { getTopics } from "../utils/api"
import Topics from "./Topics"
import '../css/TopicsList.css'

const TopicsList = ({topics, setTopics}) => {
    
    const [isLoading, setIsLoading] = useState(false)

    useEffect(()=> {
        setIsLoading(true)
        getTopics()
        .then((topicsResponse) => {
            
            setTopics(topicsResponse.data.topics)
            setIsLoading(false)
        })
    }, [])

    if (isLoading){
        return (
        <section>
            <div id='loading'></div>
        </section>)
    }

    return(
        <div className="topics-list">
            <h1>Topics</h1>
            <ul>
                {topics.map((topic)=> {
                    return (<Topics key={topic.slug} topic={topic}/>)
                })}
            </ul>
        </div>
    )
}

export default TopicsList