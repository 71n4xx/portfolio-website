import React from 'react'

 const colorScheme = {
    "CHAMPION": "#FE5860",
    "1st Runner Up": "#FC745A",
    "2nd Runner Up": "#FB8B54",
    "Participant" : "#F9A54F",
};

const AwardsCard = ({award, clickFunc}) => {
   
  return (
    <div className='w-full max-w-[1200px]'>
        <div onClick={clickFunc} className='w-full max-w-[1200px] gap-4 flex lg:flex-row xl:flex-row 2xl:flex-row md:flex-col sm:flex-col justify-between items-center p-8 cursor-pointer transition-colors duration-300 hover:bg-mediumViolet bg-darkViolet rounded-2xl'>
            <div className='flex flex-col lg:items-start 2xl:items-start xl:items-start justify-center gap-2'>
                <div className='text-yellow font-special font-bold text-2xl'>{award.compName}</div>
                <div className='font-special font-bold text-xl text-white'>{award.date}</div>
            </div>
            <div style={{"background":colorScheme[award.place]}} className='px-8 py-1 min-w-[172px] rounded-full font-body font-semibold text-base text-white'>{award.place}</div>
        </div>
    </div>
  )
}

export default AwardsCard