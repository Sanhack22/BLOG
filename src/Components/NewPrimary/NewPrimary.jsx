
export const NewPrimary = ({image,date,description}) => {
  return (
    <div className="w-3/4 flex items-center	 flex-col border-4 ">
        <img className='w-3/4 mr-2 mt-2 rounded' src={image}></img>
        <p className=' font-semibold	mt-2 mb-1'>{date}</p>
        <span className="bg-blue-700 w-3/4 text-white h-1 mb-2">        </span>

          <p className="w-3/4 text-center font-semibold">{description}</p>
        <hr></hr>
    </div>
  )
}
