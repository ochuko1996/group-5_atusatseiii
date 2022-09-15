import React from 'react'
// import { Link } from "react-router-dom";
import Image from '../../atom/Image'
import brand from '../../../assets/brand.png'
import NavMenu from '../NavMenu'

function NavBar() {
  return (
     <nav className="navbar hidden lg:flex h-[70px] items-center justify-between border-white px-[30px] w-full ">
            <div className="nav-brand">
                <div className="logo">
                    <Image src={brand} className="w-[70px] h-[70px]" alt="brand"/>
                </div>
            </div>
            <NavMenu/>
        </nav>
  )
}

export default NavBar