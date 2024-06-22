import './App.css'
import React from 'react'
import search from './search'

function App() {
  const handleClick = () => {
    const randSearch = search[Math.floor(Math.random() * 2997 )]

    window.location = `https://www.google.com/search?q=site%3Aredditfavorites.com+${randSearch}&sca_esv=bedc8d185beb6f7e&sca_upv=1&ei=yO52ZrulLu2WseMP55OG8As&ved=0ahUKEwi7qbuoxO-GAxVtS2wGHeeJAb4Q4dUDCBA&uact=5&oq=site%3Aredditfavorites.com+a&gs_lp=Egxnd3Mtd2l6LXNlcnAiGnNpdGU6cmVkZGl0ZmF2b3JpdGVzLmNvbSBhSKAIUMEHWMEHcAJ4AJABAZgB1gGgAdYBqgEDMi0xuAEDyAEA-AEBmAIAoAIAmAMAiAYBkgcAoAct&sclient=gws-wiz-serp`
  }
  return (
    <div className='App' onClick={handleClick}>
      <h1>Click Anywhere</h1>
    </div>
  )
}

export default App
