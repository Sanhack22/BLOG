
export const NewPrimary = ({image,date,description}) => {
  return (
    <div className="w-1/2">
        <img className='w-1/4 mr-2' src={image}></img>
        <div className=''>
        <p className='font-bold'>{date}</p>
        <p>{description}</p>
        <hr></hr>
        </div>
    </div>
  )
}
