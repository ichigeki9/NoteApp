import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
// import App from './pages/App'
import { Login } from './pages/login'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App></App> */}
    <Login />
  </StrictMode>,
)