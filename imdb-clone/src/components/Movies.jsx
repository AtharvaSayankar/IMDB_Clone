import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard'
import axios from 'axios'
import Pagination from './Pagination'

const Movies = ({handleAddToWatchlist, handleRemoveFromWatchlist, watchlist}) => {

  const [movies, setMovies] = useState([])
  const [pageNo, setPageNo] = useState(1)

  const handlePagePrev = () => {
    if(pageNo===1){
      setPageNo(1)
    }else{
      setPageNo(pageNo-1)
    }
  }

  const handlePageNext = () => {
    setPageNo(pageNo+1)
  }

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=c40dc875a1dbb8860118f73c9e02cd3b&language=en-US&page=${pageNo}`)
      .then(function(res){
        setMovies(res.data.results)
      })
  }, [pageNo])


  return (
    <div className='p-5'>
      <div className='text-xl m-2 font-bold text-center'>
        Trending Movies
      </div>

      <div className='flex flex-row flex-wrap justify-around gap-1'>
        {movies.map((movie) => {
          return <MovieCard key={movie.id} poster_path={movie.poster_path} name={movie.original_title}  handleAddToWatchlist={handleAddToWatchlist} movie={movie} handleRemoveFromWatchlist={handleRemoveFromWatchlist} watchlist={watchlist}/>
        })}
      </div>

      <Pagination pageNo={pageNo} handlePagePrev={handlePagePrev} handlePageNext={handlePageNext}/>

    </div>
  )
}

export default Movies
