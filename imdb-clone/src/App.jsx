import './App.css'
import Navbar from './components/Navbar'
import Movies from './components/Movies'
import Watchlist from './components/Watchlist'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Banner from './components/Banner'
import { useEffect, useState } from 'react'

function App() {

  //Creating watchlist at global level & passing add function to lower components 
  // i.e. from App component upto MovieCard component
  const [watchlist, setWatchlist] = useState([])

  let handleAddToWatchlist = (movie) => {
    let newWatchlist = [...watchlist, movie]
    
    //To prevent loss of watchlist while refresh, add it to local storage
    localStorage.setItem('moviesApp', JSON.stringify(newWatchlist))
    setWatchlist(newWatchlist)
    console.log(newWatchlist)
  }

  let handleRemoveFromWatchlist = (unwantedMovie) => {
    let filteredWatchlist = watchlist.filter((moviesList) => {
      return moviesList.id != unwantedMovie.id
    })
    localStorage.setItem('moviesApp', JSON.stringify(filteredWatchlist))
    setWatchlist(filteredWatchlist)
  }

  useEffect(()=>{

    //To get data from local storage
    let movieFromLocalStorage = localStorage.getItem('moviesApp')
    if(!movieFromLocalStorage){
      return <div>No movies in watchlist</div>
    }
    setWatchlist(JSON.parse(movieFromLocalStorage))
  }, [])

  return (
    <div>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path='/' element={<> <Banner /> <Movies handleAddToWatchlist={handleAddToWatchlist} handleRemoveFromWatchlist={handleRemoveFromWatchlist} watchlist={watchlist}/> </>}/>
          <Route path='/watchlist' element={<Watchlist watchlist={watchlist}/>}/>
        </Routes>

      </BrowserRouter>
    </div>
  )
}

export default App
