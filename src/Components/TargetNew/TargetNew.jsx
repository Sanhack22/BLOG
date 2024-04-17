import React, { useRef } from 'react'

export const TargetNew = ({image,date,description,onClick}) => {

  const valueTarget = useRef(null)
 function getTarget() {
   console.log(valueTarget.target);
 }
  return (
      
    <div className='w-5/6 flex text-white m-2' ref={valueTarget} onClick={onClick}>
        <img className='w-1/4 mr-2' src={image}></img>
        <div className=''>
        <p className='font-bold'>{date}</p>
        <p>{description}</p>
        <hr className=''></hr>
        </div>
        
    </div>
  )
}
