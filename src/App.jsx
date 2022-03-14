import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

import FeedVideos from './components/FeedVideos/index.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <FeedVideos />
    </div>
  )
}

export default App
