import './App.css'
import React from 'react'
import search from './search'

function App() {
  const handleClick = () => {
    const randSearch = search[Math.floor(Math.random() * 2997 )]

    window.location = `https://www.google.com/search?q=site%3Aredditfavorites.com%2Fservices+${randSearch}&sca_esv=fdd505efaadfc2c0&sca_upv=1&ei=O69MZpWYHfzjseMP6ca0yAw&ved=0ahUKEwjVodXm-Z6GAxX8cWwGHWkjDckQ4dUDCBA&uact=5&oq=site%3Aredditfavorites.com%2Fservices+a&gs_lp=Egxnd3Mtd2l6LXNlcnAiI3NpdGU6cmVkZGl0ZmF2b3JpdGVzLmNvbS9zZXJ2aWNlcyBhSM4JUK0IWK0IcAR4AJABAJgBAKABAKoBALgBA8gBAPgBAZgCAKACAJgDAIgGAZIHAKAHAA&sclient=gws-wiz-serp`
  }
  return (
    <div className='App' onClick={handleClick}>
      <h1>Click Anywhere</h1>
    </div>
  )
}

export default App
