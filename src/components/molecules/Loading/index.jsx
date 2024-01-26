import React from 'react'

function Loading(loaded) {
  return (
    <div className='absolute h-screen w-full z-50'>
        <div className={`h-1/2 bg-main-red ${loaded ? "loader-up": ""} text-white`}>top</div>
        <div className={`h-1/2 bg-main-red ${loaded ? "loader-down": ""}`}></div>
    </div>
  )
}

export default Loading