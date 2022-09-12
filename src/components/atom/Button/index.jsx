import React from 'react'

export default function Button({type, className, children, id, onClick}) {
  return (
    <button type={type} className={className} id={id} onClick={onClick}>{children}</button>    
  )
}
 