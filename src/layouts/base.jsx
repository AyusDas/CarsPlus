import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import { useParams, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import cardDetails from '../constants/const'
import { BsFillFuelPumpFill, BsCurrencyDollar } from 'react-icons/bs'
import { MdAirlineSeatReclineNormal } from 'react-icons/md'
import { AiOutlineSearch } from 'react-icons/ai'

const Base = () => {
  const { page } = useParams()
  const [array, setArray] = useState(cardDetails)
  const listingCars = array.map((obj) => {
    return (
      <div className={`${ page !== obj.page ? 'hidden':'' } px-4 py-2 w-72 bg-white flex flex-col gap-2 items-center rounded-md shadow-sm`}>
        <img src = { obj.img } className={`w-64 h-48 rounded-md`} loading="lazy"/>
        <p className='w-64 text-xl'> { obj.label }  </p>
        <div className='flex py-2 border-t gap-5 w-64'>
          <div className='flex items-center'>
            <BsCurrencyDollar className=' text-blue-800 text-lg'/>
            <p className='text-lg'> { obj.price }  </p>
          </div>
          <div className='flex gap-1 items-center'>
            <BsFillFuelPumpFill className=' text-green-600 text-lg'/>
            <p className='text-lg'> { obj.miles }  </p>
          </div>
          <div className='flex gap-1 items-center'>
            <MdAirlineSeatReclineNormal className=' text-gray-700 text-lg'/>
            <p className='text-lg'> { obj.seats }  </p>
          </div>
        </div>
      </div>
    )
  })

  const handleChange = e => {
    if(e.target.value !== '') {
    let val = e.target.value
    setArray(array.filter((obj) => 
    obj.label.toLowerCase().includes(val.toLowerCase())))
    }
    else {
      setArray(cardDetails)
    }
  }

  return ( 
  <>
    <section className="flex flex-col bg-slate-100 items-center w-full h-full">
      <Header/>
      <div className='flex gap-2 py-10 items-center'>
        <div className='p-2 rounded-full bg-white shadow-md cursor-pointer'>
          <AiOutlineSearch className='text-2xl'/>
        </div>
        <input type='text' id='search' className='w-72 h-10 p-2 rounded-md shadow-md border border-gray-300' onChange={handleChange}/>
      </div>
      <main className='font-semibold grid grid-cols-3 gap-28 mx-3 my-3'>
        {listingCars}
      </main>
      <Footer/>
    </section>
  </>
  )
}

export default Base
