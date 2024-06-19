import { Routes, Route, useLocation } from 'react-router-dom';
import ArticlesList from './components/ArticlesList'
import Header from './components/Header'
import '.css/App.css'
import Home from './components/Home';
import ArticleById from './components/ArticlesById';

function App() {
  const location = useLocation()  
  return (
    <div className='App'>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/articles/:article_id" element={<ArticleById />}/>
      </Routes>
      {location.pathname === '/' && <ArticlesList/>}
    </div>
  )
}

export default App
