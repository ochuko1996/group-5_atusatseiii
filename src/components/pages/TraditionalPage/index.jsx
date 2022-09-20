import React,{useState} from 'react'
import ArrowLeft from '../../atom/ArrowLeft'
import Input from '../../atom/Input'

import SingleChief from '../../molecules/SingleChief'

import { rulingDetails } from "../../crest-list";
import MobileChiefDP from '../../molecules/MobileChiefDP';
import RedFooterNav from '../../molecules/RedFooterNav';
import NavToggle from '../../molecules/NavToggle';
import NavFooter from '../../molecules/NavFooter';
function TraditionalPage({showFooter, setShowFooter}) {
  const [index, setIndex] = useState(0)
  const [inputValue, setInputValue] = useState('')
  const {name, image, title, appellation} = rulingDetails[index]
  const [showSmallDp, setShowSmallDp] = useState(false)
  
  const searchChief = (e)=> setInputValue(e.target.value) 
  return (
    <div className="relative">
      <RedFooterNav/>
      <NavToggle setShowFooter={setShowFooter}/>
      {showFooter && <NavFooter setShowFooter={setShowFooter}/>}
      <section className="ginuwa-container h-100">
        <div className="flex no-margin flex-wrap">
            <div className=" lg:w-2/5 no-padding relative hidden lg:block">
                <div className="bg-trad"></div>
            </div>
            <div className=" lg:w-3/5  w-full relative no-padding">
                <ArrowLeft/>
                <div className="ginuwa-ruling">
                    <h2 className="font-bold">
                        The Warri Traditional Council
                    </h2>
                    <span>
                        The warri traditional council.
                    </span>
                    <div className="sm:w-1/2">
                        <Input type="search" placeholder="Search" onChange={searchChief}/>
                    </div>
                </div>
                <div className="flex ginuwa-crest no-margin" >
                    <div className="ss:w-1/2 p-x-24 w-full chief-container">
                      {
                        rulingDetails.filter((chief)=> chief.name.toLocaleLowerCase().includes(inputValue)).map((chief)=>{
                          return <SingleChief key={chief.id} {...chief} setIndex={setIndex} setShowSmallDp={setShowSmallDp}/>
                        })  
                      }
                        
                    </div>
                    <div className="ss:w-1/2 hidden ss:block p-x-24">
                        <div className="ginuwa-main-dp">
                            <div className="ginuwa-crest-display">
                                <div className="main-dp" style={{paddingBottom:"5px"}}>
                                    <img src={image} alt="" style={{width:"100px", height:"100px"}}/>
                                </div>
                                <h5 style={{fontSize: "20px", fontWeight: "bold"}}>
                                    {name} 
                                </h5>
                                <p style={{fontSize: "12px", paddingTop: "10px"}}>
                                    <b>Title</b> {title}
                                </p>
                                <p style={{fontSize: "12px", paddingTop: "10px"}}>
                                    <b>Appellation</b> {appellation}
                                </p>
                                
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    </section>
    
    { showSmallDp && <MobileChiefDP {...{name, image, title, appellation}} setShowSmallDp={setShowSmallDp}/>}
    </div>

  )
}

export default TraditionalPage