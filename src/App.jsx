import React from 'react'
import Button from './components/Button'

const App = () => {
  const handleClick = () => {
    console.log("button clicked");
  }
  return (
    <div className='max-w-7xl min-h-screen mx-auto flex items-center justify-center gap-5'>
      <Button variant="primary" size="xl" onClick={handleClick}>Click me!</Button>
      <Button variant="success" size="sm">Sucess</Button>
      <Button variant="warning" size="md">Warning</Button>
      <Button variant="danger" size="xl" className="border-2 border-white">Danger</Button>
    </div>
  )
}

export default App