import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import { ScrollShadow } from "@nextui-org/scroll-shadow";


function App() {
  const [count, setCount] = useState(0)

  return (
    <ScrollShadow>
      <div className=' h-full'>
        <Home />
      </div>
    </ScrollShadow>
  )
}

export default App
