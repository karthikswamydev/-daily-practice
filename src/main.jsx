import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import InfiniteSelect from './components/InfiniteSelect.jsx'
import Scroll from './components/Scroll.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <InfiniteSelect/>
     */}
     <Scroll/>
  </StrictMode>,
)
