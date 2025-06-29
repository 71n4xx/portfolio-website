import React from 'react'

const ExpCard = ({year, institution, subtitle1, subtitle2, highlight, logo}) => {
  return (
    <div className='bg-darkViolet px-8 py-6 rounded-xl my-4'>
        <div className='flex md:flex-col-reverse  sm:flex-col-reverse lg:flex-row w-full justify-between lg:text-left md:text-center md:items-center sm:items-center gap-4 md:gap-8'>
            <div className='flex flex-col justify-evenly gap-4'>
                <div className='font-special font-black text-2xl'>
                    {year}
                </div>
                <div className='font-special font-bold text-2xl text-yellow'>
                    {institution}
                </div>
                <div className='font-body'>
                    {subtitle1} <br />
                    {subtitle2} <span className='font-bold'>{highlight}</span>
                </div>
                

            </div>
            <div className=''>
                <img src={logo} alt="logo" className='max-w-[150px] h-auto aspect-square rounded-xl object-cover'/>
            </div>
        </div>
    </div>
  )
}

export default ExpCard