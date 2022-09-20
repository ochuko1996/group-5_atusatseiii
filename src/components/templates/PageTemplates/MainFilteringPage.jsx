import React,{useState} from 'react'

import Image  from "../../atom/Image";
import Input from "../../atom/Input";
import Text from "../../atom/Text";

import  {BsArrowLeft} from 'react-icons/bs'
import { profileOfOba } from "../../crest-list";
import SmallProfile from '../../molecules/SmallProfile';

import RedFooterNav from "../../molecules/RedFooterNav";
import { Link } from 'react-router-dom';

function MainFilteringPage({mainHeading, data, backgroundImage}) {
    const [index, setIndex] = useState(0)
    const [inputValue, setInputValue] = useState('')
    // const {name,biography,image, start, end, span,family } = data[index]
    const [smallProf, setSmallProf] = useState(false)
    
    
    const selectCrest = (e)=>{
        setInputValue(e.target.value)
    }
  return (
    <div className="relative">
        <section className="ginuwa-container h-100">
            <div className="flex no-margin">
                <div className=" lg:w-2/5 no-padding relative">
                    <div className="bg-left" style={{backgroundImage: `url(${backgroundImage})`}}/>
                </div>
                <div className=" lg:w-3/5  w-full relative no-padding">
                    <div>
                        <Link to="/">
                            <div className="arrow-left font-bold flex items-center justify-center">
                                <BsArrowLeft/>
                            </div>
                        </Link>
                    </div>
                    <div className="ginuwa-ruling">
                        <h2 className="font-bold">
                            {mainHeading}
                        </h2>
                        <span>
                            Warri Kingdom
                        </span>
                        <div className="ss:w-1/2">
                            <Input type='search' placeholder='Search' onChange={selectCrest}/>
                        </div>
                    </div>
                    <div className="flex ginuwa-crest no-margin" >
                        <div className="ss:w-1/2 p-x-24 crest-card-container w-full">
                            {
                                data.filter((prof)=>prof.name.toLocaleLowerCase().includes(inputValue))
                                .map((profile, indexDB)=>{
                                    const {id, image,name,span,start,end} =profile
                                return  (
                                    <div className="flex crest-card mb-10" 
                                        key={id} 
                                        onClick={
                                            ()=> {
                                                setIndex( id - 1)
                                                setSmallProf(true)    
                                            }

                                            }
                                        >
                                        <div className="w-1/3 no-padding">
                                            <Image style={{paddingRight:"5px", width:"120px", height:"120px"}} src={image} alt=""/>
                                        </div>
                                        <div className="w-2/3 pl-1">
                                            <Text type="h5" style={{fontSize: "1rem"}} className="serial">
                                                {name}
                                            </Text>
                                            <Text style={{fontSize:".75rem", paddingTop: "5px"}}>
                                                {span}
                                            </Text>
                                            <Text type='h5' style={{fontSize:".8rem", paddingTop: "12px"}}>
                                                Reign
                                            </Text>
                                            <div className="flex ">
                                                <Text className="w-1/2 " style={{fontSize: ".7rem"}}>
                                                    <b>Start:</b> {start} 
                                                </Text>
                                                <Text className="w-1/2 " style={{fontSize: ".7rem"}}>
                                                    <b>End:</b> {end}
                                                </Text>
                                            </div>
                                        </div>
                                    </div>
                                    )
                                })
                            }
                        </div>
                        <div className="w-1/2 p-x-24 hidden ss:block">
                            <div className="ginuwa-main-dp" >
                                <div className="ginuwa-crest-display">
                                    <div className="main-dp">
                                        <Image  src={image} alt="" />
                                    </div>
                                    <h5>
                                        {name}   
                                    </h5>
                                    <p style={{fontSize:".75rem", paddingTop: "5px"}}>
                                        {span}
                                    </p>
                                    <h5 style={{fontSize:".8rem", paddingTop: "12px"}}>
                                        Reign
                                    </h5>
                                    <div className=" ">
                                        <p className="w-1/2 " style={{fontSize: ".7rem"}}>
                                            <b>Start:</b> {start} 
                                        </p>
                                        <p className="w-1/2 " style={{fontSize: ".7rem"}}>
                                            <b>End:</b>{end}
                                        </p>
                                        <p style={{fontSize: ".75rem", paddingTop: "10px"}}>
                                            {biography} 
                                        </p>

                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
        {   smallProf 
            && 
            <SmallProfile 
                {...{name, biography,image, start, end, span,family} } 
                BsArrowLeft={BsArrowLeft}
                setSmallProf={setSmallProf}
            />
        }
        <RedFooterNav/>
    </div>
  )
}

export default MainFilteringPage