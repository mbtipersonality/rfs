import './App.css'
import React from 'react'
import search from './search'

function App() {
  const handleClick = () => {
    const randSearch = search[Math.floor(Math.random() * 2997 )]

    window.location = `https://www.google.com/search?q=site%3Areddemy.com+${randSearch}&rlz=1C1FKPE_enIN956IN956&oq=site%3Areddemy.com+a&aqs=chrome.0.69i59l2j69i58.4336j0j15&sourceid=chrome&ie=UTF-8`
  }
  return (
    <div className='App' onClick={handleClick}>
      <h1>Click Anywhere</h1>
    </div>
  )
}

export default App
