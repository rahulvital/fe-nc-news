import { Routes, Route, useLocation } from 'react-router-dom';
import ArticlesList from './components/ArticlesList'
import Header from './components/Header'
import './css/App.css'
import Home from './components/Home';
import ArticleById from './components/ArticlesById';
import TopicsList from './components/TopicsList';
import ArticlesByTopic from './components/ArticlesByTopic';
import { useState } from 'react';

function App() {
  const location = useLocation()
  const [topics, setTopics] =useState([])

  return (
    <div className='App'>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/articles/:article_id" element={<ArticleById />}/>
        <Route path="/topics" element={<TopicsList topics={topics} setTopics={setTopics}/>}/>
        <Route path="/articles" element={<ArticlesByTopic topics={topics} />}/>
      </Routes>
      {location.pathname === '/' && <TopicsList/> && <ArticlesList/>}
    </div>
  )
}

export default App
