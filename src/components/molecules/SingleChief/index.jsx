import Image from '../../atom/Image'

function SingleChief({id, image, name, title, setIndex, setShowSmallDp}) {
  return (
    <div className="chief-card flex" onClick={()=> {
            setIndex(id - 1) 
            setShowSmallDp(true)
        }}>
        <div className="w-1/4">
            <Image src={image} alt="" style={{height:"70px", width:"70px"}}/>
        </div>
        <div className="w-2/3" style={{marginLeft: "10px"}}>
            <h5 style={{fontSize: "0.9rem", fontWeight: "bold", paddingTop: "10px"}}>
                {name}  
            </h5>
            <p style={{fontSize: "0.8rem", fontWeight: "600", paddingTop: "10px"}}>
                {title}  
            </p>
        </div>
    </div> 
  )
}

export default SingleChief