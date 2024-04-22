import React, { useRef } from 'react'

export const TargetNew = ({image,date,description,onClick}) => {


  return (
      
    <div className='w-5/6 flex h-36 m-2 justify-between'  onClick={onClick}>
      <div className='w-32 mr-2 flex justify-center'>
      <img src={image} className='w-3/4 h-3/5'></img>
      </div>
        <div className='w-9/12'>
        <p className=' w-1/2 font-bold text-emerald-900'>{date}</p>
        <p className=''>{description}</p>
        <hr className=''></hr>
        </div>
        
    </div>
  )
}
