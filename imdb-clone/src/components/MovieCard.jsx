import React from 'react'

const MovieCard = ({
  poster_path, 
  name, 
  handleAddToWatchlist, 
  movie, 
  handleRemoveFromWatchlist, 
  watchlist
}) => {
  
  function doesContain(){
    for (let i = 0; i < watchlist.length; i++) {
      if(watchlist[i].id == movie.id){
        return true
      }
    }

    return false
  }

  return (
    <div className='h-[40vh] w-[140px] bg-center bg-cover rounded-xl hover:cursor-pointer hover:scale-110 duration-300 flex flex-col justify-between items-end' style={{backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})`}}>
      
      {doesContain(movie) 
        ? 
        <div onClick={() => handleRemoveFromWatchlist(movie)} className='m-2 flex justify-center items-center rounded-lg h-6 w-6 bg-gray-900/60'>
          &#10060;
        </div> 
        : 
        <div onClick={() => handleAddToWatchlist(movie)} className='m-2 flex justify-center items-center rounded-lg h-6 w-6 bg-gray-900/60'>
          &#128525;
        </div>
      }

      <div className='text-white text-l w-full p-1 text-center bg-gray-700/40 rounded-xl'>
        {name}
      </div>
    </div>
  )
}

export default MovieCard
