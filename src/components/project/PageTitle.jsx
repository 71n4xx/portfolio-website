import React from 'react'

const PageTitle = ({title,subtitle}) => {
  return (
    
    <div className="max-w-[1400px] mx-auto md:px-10 lg:px-8 sm:px-6 flex flex-col gap-8 justify-center items-start">
      <div className="flex-col w-full justify-center gap-4 xl:items-start 2xl:items-start md:items-center sm:items-center lg:items-start flex">
        <div className="md:text-left font-special font-black text-yellow text-5xl ">{title}</div>
        <div className='max-w-[70%] lg:text-left xl:text-left 2xl:text-left font-body font-normal text-white'>{subtitle}</div>
      </div>
      
    </div>
  )
}

export default PageTitle