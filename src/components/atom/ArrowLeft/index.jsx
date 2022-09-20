import React from 'react'
import  {BsArrowLeft} from 'react-icons/bs'
import { Link } from 'react-router-dom';
function ArrowLeft({style}) {
  return (
    <div>
        <Link to="/">
            <div className="arrow-left font-bold flex items-center justify-center" style={style}>
                <BsArrowLeft/>
            </div>
        </Link>
    </div>
  )
}

export default ArrowLeft