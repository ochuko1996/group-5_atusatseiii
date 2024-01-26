import React,
{useState, useEffect} 
from 'react'
import NavBar from "../../molecules/NavBar";
import HeroText from "../../molecules/HeroText";
import RedFooterNav from "../../molecules/RedFooterNav";
import NavToggle from "../../molecules/NavToggle";
import NavFooter from '../../molecules/NavFooter';
import Loading from '../../molecules/Loading';
function Home({setShowFooter, showFooter}) {
  // const [showFooter, setShowFooter] = useState(false)
  // let loading = "Loading"
  const [isLoading, setIsLoading] = useState(true)
  
  useEffect(() => {
    window.addEventListener('load', ()=>{
      setIsLoading(prev => prev = false)
    })
    
    return () => {
      window.removeEventListener('load', ()=>{
        setIsLoading(prev => prev = false)
      })
      
    }
  }, [])
  const content = (
    <div className="main-section relative">
      {isLoading && <Loading isLoading={isLoading}/>}
      <NavBar/>
      <HeroText/>
      <RedFooterNav/>
      <NavToggle setShowFooter={setShowFooter}/>
      {showFooter && <NavFooter setShowFooter={setShowFooter}/>}
    </div>
  )
  return content
}

export default Home