import React from 'react'
// import { useRef } from 'react'
// import { useState } from 'react'

export default function Input({type,id, className, placeholder, onFocus, onBlur, onChange, value}) {
  
  return (
    <input type={type} className={className} placeholder={placeholder} onFocus={onFocus} onBlur={onBlur} id={id} onChange={onChange} value={value}/>
  )
} 
