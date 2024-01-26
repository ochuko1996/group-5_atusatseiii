import React, {useState} from 'react'

import NavToggle from '../../molecules/NavToggle'
import RedFooterNav from '../../molecules/RedFooterNav'
import NavFooter from '../../molecules/NavFooter'
import SingleNotice from '../../molecules/SingleNotice'
import ArrowLeft from '../../atom/ArrowLeft'
import Text from '../../atom/Text'
import Input from '../../atom/Input'

import {data} from './royalData'

import SmallRoyalNotice from '../../molecules/SmallRoyalNotice'
function RoyalCourt({showFooter, setShowFooter}) {
  const [inputValue, setInputValue] = useState('')
  const [index, setIndex] = useState(0)
  const [notices, setNotices] = useState(data)
  const [showText, setShowText] = useState(false)
  const {title, text } = data[index]
  const searchNotice = (e)=> setInputValue(e.target.value)
  return (
    <div className="relative">
      <NavToggle setShowFooter={setShowFooter}/>
      <RedFooterNav/>
      {
        showFooter && <NavFooter  setShowFooter={setShowFooter}/>
      }
      <div className="flex notice-container">
        <div className="hidden lg:block lg:w-[35%]">
          <div className="speechesBg"></div>
        </div>
        <div className="ss:w-1/2 w-full lg:w-[30%]">
          <div className="" style={{height:"90vh"}}>
            <header className="notice-header relative">
              <ArrowLeft/>
              <Text type="h2" className='font-bold'>
                Royal Court Notice
              </Text>
              <Text>
                The is the official record of past royal engagements.
              </Text>  
              <Input type='search' placeholder='search' onChange={searchNotice}/>
            </header>
            <div style={{padding: "24px"}} >
              <div className="notice-content " style={{padding: "24px"}}>
                  {
                    notices.filter((notice)=> notice.title.toLocaleLowerCase().includes(inputValue)).map((notice)=>{
                      return (
                        <SingleNotice key={notice.id} {...notice} setIndex={setIndex} setShowText={setShowText}/>
                        
                      )
                    })
                  }
              </div>
            </div>
          </div>

        </div>
        <div className="hidden ss:block  ss:w-1/2 lg:w-[35%] NP">
          <header className="notice-title">
            <h1 className='font-bold'>{showText && title}</h1>
          </header>
          <div className="notice-display">
            <p>
                  {showText && text}
            </p>     
          </div>
        </div>
      </div>
      {
        showText
        &&
        <SmallRoyalNotice setShowText={setShowText} {...{title, text}}/>
      }
    </div>
  )
}

export default RoyalCourt