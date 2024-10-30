import { useState } from 'react'
import Card from './components/cardgen/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='p-24'>
      <h1>Welcome to Biz Card Generator</h1>
      <Card />
    </div>
      
    </>
  )
}

export default App
