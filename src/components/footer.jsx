import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {

  return (
    <div className='w-full bg-slate-50 mt-10 py-2 font-semibold flex gap-2 border-t justify-end px-10'>
      {
        [1,2,3,4,5,6,7,8,9,10].map((ele)=>(
          <Link to={`/${ele}`} className='w-10 h-10 bg-white border rounded-md shadow-sm flex items-center justify-center hover:bg-gray-100 cursor-pointer'>
            {ele}
          </Link>
        ))
      }
    </div>
  )
}

export default Footer
