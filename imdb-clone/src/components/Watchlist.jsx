import React, { useState } from 'react'

const Watchlist = ({watchlist}) => {

  const [search, setSearch] = useState('')

  let handleSearch = (e) => {
    setSearch(e.target.value)
  }

  return (
    <>

      <div className='flex justify-center flex-wrap m-4'>
        <div className='flex justify-center items-center h-[2rem] w-[7rem] text-white font-bold bg-blue-400 rounded-xl mx-4'>Action</div>
        <div className='flex justify-center items-center h-[2rem] w-[7rem] text-white font-bold bg-gray-400/50 rounded-xl'>Action</div>
      </div>

      <div className='flex justify-center my-4'>
        <input onChange={handleSearch} value={search} className='h-[2rem] w-[15rem] bg-gray-200 outline-none px-4' type="text" placeholder='Search Movies' />
      </div>

      <div className='overflow-hidden rounded-lg border border-gray-200 m-8'>
        <table className='w-full text-gray-500 text-center'>
          
          <thead className='border-b-2'>
            <tr>
              <th>Name</th>
              <th>Ratings</th>
              <th>Popularity</th>
              <th>Genre</th>
            </tr>
          </thead>

          <tbody>
            {/* You can add filter method before map method */}
            {watchlist
            .filter((movie)=>{
              //to search movies
              return movie.title.toLowerCase().includes(search.toLocaleLowerCase())
            })
            .map((movie)=>{
              
              return <tr className='border-b-2'>
              <td className='flex items-center px-6 py-4'>
                <img className='h-[6rem w-[10rem]' src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt="" />
                <div className='mx-10'>
                  {movie.title}
                </div>
              </td>
              <td>{movie.vote_average}</td>
              <td>{movie.popularity}</td>
              <td>Action</td>
              <td className='text-red-500'>Delete</td>
              </tr>
              
            })}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Watchlist
