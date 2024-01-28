import React from 'react'

function Loading(loaded) {
  return (
    <div className={`absolute h-screen w-full z-50 ${loaded ? "loader-container" : ''}`}>
        <div className={`h-1/2 bg-main-red ${loaded ? "loader-up": ""}`}></div>
        <div className={`h-1/2 bg-main-red ${loaded ? "loader-down": ""}`}></div>
    </div>
  )
}

export default Loading