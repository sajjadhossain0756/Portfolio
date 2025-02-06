import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'react-date-range/dist/styles.css' // main style file
import 'react-date-range/dist/theme/default.css' // theme css file
import Home from './pages/Home/Home'


createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Home></Home>
  </StrictMode>
)
