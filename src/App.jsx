import ArticlesList from './components/ArticlesList'
import Header from './components/Header'
import '.css/App.css'

function App() {  
  return (
    <html className='main'>
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>A Demo Font Family Page</title>
          <link href="styles.css" rel="stylesheet" />
        </head>
      <Header/>
      <ArticlesList/>
    </html>
  )
}

export default App
