import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { NewsProvider } from './contexts/NewsProvider.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <NewsProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
  </NewsProvider>,
)
