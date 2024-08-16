import React from 'react'

const Banner = () => {
  return (
    <div className='h-[20vh] md:h-[80vh] bg-cover bg-center flex items-end' style={{backgroundImage: `url(https://wallpapercave.com/wp/wp3982534.jpg)`}}>
        <div className='text-white text-xl text-center w-full bg-gray-800/60 py-1'>The Avengers</div>
    </div>
  )
}

export default Banner