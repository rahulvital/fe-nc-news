import { Routes, Route, useLocation } from 'react-router-dom';
import ArticlesList from './components/ArticlesList'
import Header from './components/Header'
import './css/App.css'
import Home from './components/Home';
import ArticleById from './components/ArticlesById';
import TopicsList from './components/TopicsList';
import ArticlesByTopic from './components/ArticlesByTopic';
import { useState } from 'react';
import Error from './components/Error';

function App() {
  const location = useLocation()
  const [topics, setTopics] =useState([])
  const [error, setError] = useState(null)

  return (
    <div className='App'>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/articles/:article_id" element={<ArticleById />}/>
        <Route path="/topics" element={<TopicsList topics={topics} setTopics={setTopics}/>}/>
        <Route path="/articles" element={<ArticlesByTopic topics={topics} />}/>
        <Route path="*" element={<Error error={{status: 404, msg:"Page Not Found"}}/>}/>
      </Routes>
      {location.pathname === '/' && <TopicsList/> && <ArticlesList/>}
      {error && <Error error={error}/>}
    </div>
  )
}

export default App
