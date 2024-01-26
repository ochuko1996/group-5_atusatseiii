import React,{useState} from 'react'

import NavBar from '../../molecules/NavBar'
import NavToggle from '../../molecules/NavToggle'
import NavFooter from '../../molecules/NavFooter'
import RedFooterNav from '../../molecules/RedFooterNav'
import Input from '../../atom/Input'
import Button from '../../atom/Button'
import SingleEvent from "../../molecules/SingleEvent";
import { events } from './event'
 
function Event({showFooter, setShowFooter}) {
  const [inputValue, setInputValue] = useState('')
  const searchEvent = (e)=>{
          setInputValue(e.target.value)
  }
  return (
    <div className="relative main-section">
      <NavBar/>
      <NavToggle setShowFooter={setShowFooter}/>
      {showFooter && <NavFooter setShowFooter={setShowFooter}/>}
      <RedFooterNav/>
      <div className="page-content">
        <header  className='flex items-center justify-between text-white flex-wrap'>
          <div className="flex flex-wrap" >
            <span className='font-bold'>Ceremonies</span>
            <span className='font-bold' style={{padding: '0 20px'}}>•</span>
            <span className='font-bold'>Events</span>
            <Input placeholder='Search' onChange={searchEvent}/>
          </div>
          <Button className='blogs'>
            See Blogs
          </Button>
        </header>
        <div className="event-container">
          {
            events.filter((event)=> event.title.toLocaleLowerCase().includes(inputValue)).map((event)=>{
              return <SingleEvent key={event.id} {...event}/>
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Event