import React from 'react'

function Pagination({pageNo, handlePagePrev, handlePageNext}) {

  return (
    <div className='bg-gray-400 p-2 mt-4 flex justify-center '>
      <button onClick={handlePagePrev} className='px-2 text-xl' type="button">-</button>
      {pageNo}
      <button onClick={handlePageNext} className='px-2 text-xl' type="button">+</button>
    </div>
  )
}

export default Pagination
