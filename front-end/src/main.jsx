import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'



if (process.env.NODE_ENV === 'production') {
  console.log = () => {}
  console.error = () => {}
  console.debug = () => {}
}

createRoot(document.getElementById('root')).render(
 
  <StrictMode>
    <App />
  </StrictMode>,
  
)
