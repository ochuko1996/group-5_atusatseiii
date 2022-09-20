import { links } from './links';
import {Link} from 'react-router-dom'
function NavMenu() {
  return (
    <div className="nav-menu">
        <div className="flex">
          {
              links.map((link,index)=>{
                return (
                  <div 
                      key={index} 
                      className={`nav-item relative ${index === links.length - 1 ?  "mr-0" : "mr-[30px]"} text-white text-[12.8px]`}
                  >
                      <Link className='nav-links' to={link.link}>{link.linkName}</Link>
                   </div>
                )
              })
          }
                    
                </div>
            </div>
  )
}

export default NavMenu