import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Scroll from './components/Scroll.jsx'
import HeroForm from './components/Form.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <InfiniteSelect/>
     */}
     {/* <Scroll/> */}
      <HeroForm/>
  </StrictMode>,
)
