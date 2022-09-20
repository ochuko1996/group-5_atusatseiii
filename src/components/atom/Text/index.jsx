import React from 'react'

export default function Text({type, children, className, style}) {
  if (type === "h1") {
    return(
        <h1 className={className} style={style}>{children}</h1>
    )
  }
  if (type === "h2") {
    return(
        <h2 className={className} style={style}>{children}</h2>
    )
  }
  if (type === "h3") {
    return(
        <h3 className={className} style={style}>{children}</h3>
    )
  }
  if (type === "h4") {
    return(
        <h4 className={className} style={style}>{children}</h4>
    )
  }
  if (type === "h5") {
    return(
        <h5 className={className} style={style}>{children}</h5>
    )
  }
  if (type === "h6") {
    return(
        <h6 className={className} style={style}>{children}</h6>
    )
  }
    return (
    <p style={style}>{children}</p>
  )
}
