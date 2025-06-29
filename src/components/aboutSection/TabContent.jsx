import React from 'react'
import ExpCard from './ExpCard'
import ButtonComponent from '../ButtonComponent'


const TabContent = ({clickFunc,list, param1, param2, param3, param4, param5, param6}) => {
  return (
    <div>
      <div className='min-h-[420px]'>
{list.slice(0,2).map((item, index) => (
            <ExpCard 
            key={index}
            year={item[param1]}
            institution={item[param2]}
            subtitle1={item[param3]}
            subtitle2={item[param4]}
            highlight={item[param5]}
            logo={item[param6]}

            />
        ))}
      </div>
       
        

        <div className='inline-flex text-darkViolet mt-2'>
            <ButtonComponent
            label={"View All"}
            label2={"More"}
            clickFunc={clickFunc}/>
        </div>

    </div>
  )
}

export default TabContent