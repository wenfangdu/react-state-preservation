import './App.css'
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
      <div>{count}</div>
    </>
  )
}

export default App
