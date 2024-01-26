import React from 'react'

function NavToggle({setShowFooter}) {
  return (
    <nav className="mobile-toggle cursor-pointer" onClick={()=>setShowFooter(true)}>
        <div className="hamburger">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#fff"><g data-name="Group 12094"><g data-name="menu (2)"><g data-name="Group 11371"><g data-name="Group 11370"><path data-name="Path 1394" d="M8.76 2.66H4.703A2.046 2.046 0 0 0 2.66 4.703V8.76a2.046 2.046 0 0 0 2.043 2.044H8.76a2.046 2.046 0 0 0 2.044-2.044V4.703A2.046 2.046 0 0 0 8.76 2.66Zm.663 6.1a.664.664 0 0 1-.663.663H4.703a.664.664 0 0 1-.663-.663V4.703a.664.664 0 0 1 .663-.663H8.76a.664.664 0 0 1 .663.663Z" fill="#fff"></path></g></g><g data-name="Group 11373"><g data-name="Group 11372"><path data-name="Path 1395" d="M19.269 2.66h-4a2.073 2.073 0 0 0-2.074 2.071v4a2.073 2.073 0 0 0 2.071 2.071h4a2.073 2.073 0 0 0 2.071-2.071v-4a2.073 2.073 0 0 0-2.068-2.071Zm.69 6.074a.691.691 0 0 1-.69.69h-4a.691.691 0 0 1-.69-.69v-4a.691.691 0 0 1 .69-.69h4a.691.691 0 0 1 .69.69Z" fill="#fff"></path></g></g><g data-name="Group 11375"><g data-name="Group 11374"><path data-name="Path 1396" d="M8.76 13.195H4.703a2.046 2.046 0 0 0-2.043 2.043v4.057a2.046 2.046 0 0 0 2.043 2.043H8.76a2.046 2.046 0 0 0 2.044-2.043v-4.058a2.046 2.046 0 0 0-2.044-2.042Zm.663 6.1a.664.664 0 0 1-.663.663H4.703a.664.664 0 0 1-.663-.663v-4.058a.664.664 0 0 1 .663-.663H8.76a.664.664 0 0 1 .663.663Z" fill="#fff"></path></g></g><g data-name="Group 11377"><g data-name="Group 11376"><path data-name="Path 1397" d="M19.269 13.195h-4a2.073 2.073 0 0 0-2.074 2.071v4a2.073 2.073 0 0 0 2.071 2.071h4a2.073 2.073 0 0 0 2.071-2.071v-4a2.073 2.073 0 0 0-2.068-2.071Zm.69 6.074a.691.691 0 0 1-.69.69h-4a.691.691 0 0 1-.69-.69v-4a.691.691 0 0 1 .69-.69h4a.691.691 0 0 1 .69.69Z" fill="#fff"></path></g></g></g></g></svg>
        </div>
    </nav>
  )
}

export default NavToggle