import React from 'react'
import { BsArrowLeft } from 'react-icons/bs'

function MobileChiefDP({name, title, appellation, setShowSmallDp}) {
  return (
    <div className="sm-dp-profile">
        <div className="sm-dp-container flex  flex-col">
                <div className="flex items-center mb-2">
                    <div className='flex'>
                        <BsArrowLeft className='cursor-pointer' onClick={()=> setShowSmallDp(false)}/>
                    </div>
                    <h5  style={{fontSize: "14.4px", paddingLeft:"10px"}}>
                        {name}  
                    </h5>
                </div>
                <hr/>
                <div className="ginuwa-crest-display">
                    <h5 style={{fontSize: "1.5rem", fontWeight: "bold", paddingTop: "10px"}}>
                        {name}  
                    </h5>
                    <p style={{fontSize: "0.9rem", paddingTop: "10px"}}>
                    <b>Title:</b> {title}  
                    </p>
                    <p style={{fontSize: "0.9rem", paddingTop: "10px"}}>
                        <b>Applellation:</b> {appellation}  
                    </p>
            
        
                </div>
        </div>

    </div>
    
  )
}

export default MobileChiefDP