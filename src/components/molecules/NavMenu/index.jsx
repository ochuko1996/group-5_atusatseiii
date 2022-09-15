import { links } from './links';
function NavMenu() {
  return (
    <div className="nav-menu">
                <div className="flex">
                    {
                        links.map((link,index)=>{
                           return <div key={index} className={`nav-item relative ${index === links.length - 1 ?  "mr-0" : "mr-[30px]"} text-white text-[12.8px]`}><a className='nav-links' href='/'>{link.link}</a></div>
                        })
                    }
                    {/* <div className="nav-list"><Link to='/history'>history</Link></div> */}
                    
                </div>
            </div>
  )
}

export default NavMenu