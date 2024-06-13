import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from '@nextui-org/react'
import Home from './pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=' h-screen'>
      <Home />
    </div>
  )
}

export default App
