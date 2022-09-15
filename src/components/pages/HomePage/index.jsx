import React,{useState} from 'react'
import NavBar from "../../molecules/NavBar";
import HeroText from "../../molecules/HeroText";
import RedFooterNav from "../../molecules/RedFooterNav";
import NavToggle from "../../molecules/NavToggle";
import NavFooter from '../../molecules/NavFooter';
function Home() {
  const [showFooter, setShowFooter] = useState(false)
  return (
    <div className="main-section relative">
      <NavBar/>
      <HeroText/>
      <RedFooterNav/>
      <NavToggle setShowFooter={setShowFooter}/>
      {showFooter && <NavFooter setShowFooter={setShowFooter}/>}
    </div>
  )
}

export default Home