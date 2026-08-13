import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import './assets/css/animate.css'
import './assets/css/flex-slider.css'
import './assets/css/fontawesome.css'
import './assets/css/owl.css'
import './assets/css/templatemo-tale-seo-agency.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
