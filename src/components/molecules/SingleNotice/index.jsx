import React from 'react'

function SingleNotice({title, text, id, setIndex, setShowText}) {
  return (
    <div className='notice-text' 
        onClick={()=> {
                            setIndex(id -1)
                            setShowText(true)
                      }}>
        <h2 className='font-bold'>
            {title}
        </h2>
        <p>{text.substring(0, 110)}</p>
    </div>
  )
}

export default SingleNotice