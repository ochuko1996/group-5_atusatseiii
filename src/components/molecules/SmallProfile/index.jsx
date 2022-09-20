import React from 'react'
import Text from "../../atom/Text";
import Image from "../../atom/Image";
import ArrowLeft from '../../atom/ArrowLeft';
function SmallProfile({name,image, start, end, span,family,  setSmallProf}) {
  return (
    <div className="sm-dp-profile">
            <div className="sm-dp-container  items-center" >
                <div className="flex items-center">
                    <div className="font-bold bk" style={{fontSize: "1.2rem"}} onClick={()=> setSmallProf(false)}>
                        <ArrowLeft/>
                    </div>
                    <Text type='h5'  style={{fontSize: "14.4px", paddingLeft:"10px"}}>
                        {name}  
                    </Text>
                </div>
                <hr/>
                <div className="ginuwa-crest-display">
                    <div className="main-dp">
                        <Image src={image} alt="" style={{width:"140px", height:"140px"}}/>
                    </div>
                    <h5 style={{fontSize: "12.8px", paddingTop: "12px"}}>
                        Lifespan      
                    </h5>
                    <p style={{fontSize:".75rem", paddingTop: "5px"}}>
                    {span}
                    </p>
                    <h5 style={{fontSize:".8rem", paddingTop: "12px"}}>
                        Reign
                    </h5>
                    <div className=" ">
                        <div className="flex">
                            <p className="w-1/2 " style={{fontSize: ".7rem"}}>
                                <b>Start:</b> {start} 
                            </p>
                            <p className="w-1/2 " style={{fontSize: ".7rem"}}>
                                <b>End:</b> {end}
                            </p>
                        </div>
                        <div>

                            <h5 className='w-full' style={{fontSize: "12.8px",  paddingTop: "12px"}}>
                                Family      
                            </h5>
                            <p className='w-full' style={{fontSize: ".75rem",  paddingTop: "5px"}}>
                                {family}
                            </p>
                        </div>
                        {/* <p style={{fontSize: ".75rem", paddingTop: "10px"}}>
                            {note} 
                        </p> */}
                
                    </div>
                </div>
            </div>                
        </div>
  )
}

export default SmallProfile