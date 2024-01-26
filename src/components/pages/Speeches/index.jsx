import React, {useState} from 'react'

import NavToggle from '../../molecules/NavToggle'
import RedFooterNav from '../../molecules/RedFooterNav'
import NavFooter from '../../molecules/NavFooter'
import ArrowLeft from '../../atom/ArrowLeft'
import Text from '../../atom/Text'
import Input from '../../atom/Input'

import {speechesData} from './speeches'
import { BsArrowLeft } from 'react-icons/bs'
import { FiMessageCircle } from 'react-icons/fi'
function Speeches({showFooter, setShowFooter}) {
  const [inputValue, setInputValue] = useState('')
  const [index, setIndex] = useState(0)
  const [notices, setNotices] = useState(speechesData)
  const [showText, setShowText] = useState(false)
  const {title, content } = speechesData[index]
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
                Speeches
              </Text>
              <Input type='search' placeholder='search' onChange={searchNotice}/>
            </header>
            <div style={{padding: "24px"}} >
              <div className="notice-content " style={{padding: "24px"}}>
                  {/* <div className='text-center'>
                    no notice from the royal court yet
                  </div> */}
                  {
                    notices.filter((notice)=> notice.title.toLocaleLowerCase().includes(inputValue)).map((notice)=>{
                      return (
                        <div key={notice.id} className='notice-text' onClick={()=> {
                            setIndex(notice.id -1)
                            setShowText(true)
                          }}>
                            <h2 className='font-bold flex items-center' >
                            <span>
                                <FiMessageCircle style={{fontSize: '1.5rem'}}/>
                            </span> {notice.title}
                            </h2>
                            <p>{notice.content.substring(0, 100)}...</p>
                        </div>
                      )
                    })
                    // &&
                    // <div className='text-center'>
                    // no notice from the royal court yet
                    // </div>
                    
                  }
              </div>
            </div>
          </div>

        </div>
        <div className="hidden ss:block  ss:w-1/2 lg:w-[35%]">
          <header className="notice-title">
            <h1 className='font-bold'>{showText && title}</h1>
          </header>
          <div className="notice-display">
            <p>
                  {showText && content}
            </p>     
          </div>
        </div>
      </div>
      {
        showText
        &&
      <div className="smallRoyalNotices p-10">
        <span className="flex justify-center items-center w-10 h-10 cursor-pointer" style={{border: '1px solid black', borderRadius: '50%'}}>
          <BsArrowLeft onClick={()=> setShowText(false)}/>

        </span>
        <div className="srn-content mt-5">
          <div className="srn-title ">
            <h1 className='font-bold mb-5'>{title}</h1>
            <hr />
            <h1 className='font-bold mt-3'>
              {title}
            </h1>
            <p>
              {content}
            </p>
          </div>
        </div>
      </div>
      }
    </div>
  )
}

export default Speeches