import { useState, useEffect } from 'react'
import './App.css'

import Gallery from './Gallery'
import Search from './Search'

function App() {
  const [search, updateSearch] = useState('')
  const [entry, updateEntry] = useState('')
  const [query, updateQuery] = useState([])



  const handleClick = () => {
    updateSearch(entry)
  }
  const handleEntry = (e) => {
    let value = e.target.value

    updateEntry(value)
  }

  useEffect(() =>{
    retreive(search)
  }, [search])

  return (
    <>
    <Search
      handleEntry={handleEntry}
      handleClick={handleClick}
    ></Search>
    <Gallery
      query={query}
    >
    </Gallery>
    
    </>
  )

  async function retreive(search) {
    try{
      
      const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=G1d0X5LTYPio2ajm6KT6S38ykOlhAJOF&q=${search}&limit=12&offset=0&rating=g&lang=en&bundle=messaging_non_clips`)
      const result = await response.json()

      updateQuery(result.data)

      return result.data
    }
    catch(error){
      console.log('Error Fetching API', error)
    }
  }  
}

export default App
