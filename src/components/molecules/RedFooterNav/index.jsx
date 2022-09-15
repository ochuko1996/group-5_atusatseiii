import React,{useState} from 'react'


function RedFooterNav() {
    const [showNav, setShowNav] = useState(true)
  return (
    // <div className="floating-menu-section">
    //             <div className="menu-layout">
    //             <div className="menu">
    //                 <div className="menu-box">
    //                     <div className="menu-single">
    //                         <div className="menu-icon">
    //                             <svg xmlns="http://www.w3.org/2000/svg" width="23.509" height="23.512" fill="#fff"><path data-name="home (2)" d="M22.878 10.227 13.285.634a2.164 2.164 0 0 0-3.061 0L.638 10.22l-.01.01a2.164 2.164 0 0 0 1.44 3.688h.449v7.058a2.536 2.536 0 0 0 2.533 2.533H8.8a.689.689 0 0 0 .689-.689v-5.53a1.157 1.157 0 0 1 1.156-1.156h2.213a1.157 1.157 0 0 1 1.156 1.156v5.534a.689.689 0 0 0 .689.689h3.752a2.536 2.536 0 0 0 2.533-2.533v-7.059h.354a2.165 2.165 0 0 0 1.532-3.694Zm-.978 2.086a.782.782 0 0 1-.556.231H20.3a.689.689 0 0 0-.689.689v7.747a1.157 1.157 0 0 1-1.156 1.156h-3.06V17.29a2.536 2.536 0 0 0-2.533-2.533h-2.214a2.536 2.536 0 0 0-2.534 2.533v4.845H5.051A1.157 1.157 0 0 1 3.9 20.979v-7.747a.689.689 0 0 0-.689-.689H2.149a.786.786 0 0 1-.542-1.342L11.2 1.608a.786.786 0 0 1 1.113 0l9.587 9.593a.789.789 0 0 1 0 1.112Zm0 0" fill="#fff"></path></svg>
    //                         </div>
    //                         <div className="menu-title">
    //                             <p>Home</p>
    //                         </div>
    //                     </div>
    //                     <div className="menu-single">
    //                         <div className="menu-icon">
    //                             <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="#fff"><g fill="#fff"><path data-name="Path 1453" d="M19.8 24H5.4A5.406 5.406 0 0 1 0 18.6V1.8A1.8 1.8 0 0 1 1.8 0H15a1.8 1.8 0 0 1 1.8 1.8v9.6a.6.6 0 1 1-1.2 0V1.8a.6.6 0 0 0-.6-.6H1.8a.6.6 0 0 0-.6.6v16.8a4.2 4.2 0 0 0 4.2 4.2h14.4a.6.6 0 1 1 0 1.2Z"></path><path data-name="Path 1454" d="M19.8 24a4.2 4.2 0 0 1-4.2-4.2v-9.6a.6.6 0 0 1 .6-.6h6a1.8 1.8 0 0 1 1.8 1.8v8.4a4.2 4.2 0 0 1-4.2 4.2Zm-3-13.2v9a3 3 0 1 0 6 0v-8.4a.6.6 0 0 0-.6-.6Z"></path><path data-name="Path 1455" d="M12 10.8H4.8A1.8 1.8 0 0 1 3 9V5.4a1.8 1.8 0 0 1 1.8-1.8H12a1.8 1.8 0 0 1 1.8 1.8V9a1.8 1.8 0 0 1-1.8 1.8Zm-7.2-6a.6.6 0 0 0-.6.6V9a.6.6 0 0 0 .6.6H12a.6.6 0 0 0 .6-.6V5.4a.6.6 0 0 0-.6-.6Z"></path><path data-name="Path 1456" d="M13.2 13.8H3.6a.6.6 0 1 1 0-1.2h9.6a.6.6 0 0 1 0 1.2Z"></path><path data-name="Path 1457" d="M13.2 16.8H3.6a.6.6 0 0 1 0-1.2h9.6a.6.6 0 0 1 0 1.2Z"></path><path data-name="Path 1458" d="M7.8 19.8H3.6a.6.6 0 1 1 0-1.2h4.2a.6.6 0 1 1 0 1.2Z"></path></g></svg>
    //                         </div>
    //                         <div className="menu-title">
    //                             <p>Press</p>
    //                         </div>
    //                     </div>
    //                     <div className="menu-single">
    //                         <div className="menu-icon">
    //                             <svg xmlns="http://www.w3.org/2000/svg" width="27.323" height="22.618" fill="#fff"><g data-name="Group 11527" fill="#fff"><path data-name="Path 1466" d="M3.8 20.276v-8.325a.4.4 0 0 0-.8 0v8.156h-.916v-9.468h.883a1.255 1.255 0 0 0 .828-2.2v-1.2a1.258 1.258 0 0 0-.856-1.19V5.013a1.256 1.256 0 1 0-.8 0v1.042a1.258 1.258 0 0 0-.856 1.19v1.2a1.253 1.253 0 0 0 0 1.886v9.949A2.114 2.114 0 0 0 0 22.218a.4.4 0 0 0 .4.4h4.278a.4.4 0 0 0 .4-.4A2.114 2.114 0 0 0 3.8 20.276ZM2.967 9.839h-.856a.456.456 0 1 1 0-.911h.856a.456.456 0 0 1 0 .911Zm-.428-6.472a.455.455 0 1 1-.455.455.456.456 0 0 1 .455-.454Zm-.455 3.878a.456.456 0 0 1 .911 0v.884h-.911ZM.863 21.817a1.313 1.313 0 0 1 1.248-.911h.856a1.313 1.313 0 0 1 1.248.911Z"></path><path data-name="Path 1467" d="M26.04 20.276v-9.949a1.253 1.253 0 0 0 0-1.886v-1.2a1.258 1.258 0 0 0-.856-1.19V5.013a1.256 1.256 0 1 0-.8 0v1.042a1.258 1.258 0 0 0-.856 1.19v1.2a1.253 1.253 0 0 0 0 1.886v9.949a2.115 2.115 0 0 0-1.283 1.942.4.4 0 0 0 .4.4h4.278a.4.4 0 0 0 .4-.4 2.114 2.114 0 0 0-1.283-1.946ZM23.905 9.383a.456.456 0 0 1 .455-.455h.856a.456.456 0 0 1 0 .911h-.856a.456.456 0 0 1-.455-.456Zm.883-6.017a.455.455 0 1 1-.455.455.456.456 0 0 1 .451-.453Zm-.455 3.878a.456.456 0 1 1 .911 0v.884h-.911Zm0 3.394h.911v9.468h-.911Zm-1.228 11.179a1.313 1.313 0 0 1 1.248-.911h.856a1.313 1.313 0 0 1 1.248.911Z"></path><path data-name="Path 1468" d="M18.757 11.006a.4.4 0 1 0-.78.18l2.454 10.632H6.892l2.454-10.632a.4.4 0 1 0-.78-.18L5.999 22.128a.4.4 0 0 0 .39.49h14.545a.4.4 0 0 0 .39-.49Z"></path><path data-name="Path 1469" d="m8.033 8.744 2.631 1.911-1 3.093a.891.891 0 0 0 1.372 1l2.631-1.912 2.631 1.912a.878.878 0 0 0 1.048 0 .878.878 0 0 0 .324-1l-1-3.093 2.631-1.912a.891.891 0 0 0-.524-1.613h-1.683a.4.4 0 0 0 0 .8h1.683a.091.091 0 0 1 .054.165l-2.866 2.082a.4.4 0 0 0-.145.448l1.095 3.369a.091.091 0 0 1-.14.1l-2.866-2.082a.4.4 0 0 0-.47 0l-2.866 2.082a.091.091 0 0 1-.14-.1l1.095-3.369a.4.4 0 0 0-.145-.448L8.517 8.095a.091.091 0 0 1 .053-.165h3.543a.4.4 0 0 0 .381-.277l1.095-3.369a.091.091 0 0 1 .173 0l1.095 3.369a.4.4 0 1 0 .761-.247l-1.095-3.369a.891.891 0 0 0-1.7 0l-1 3.093H8.559a.892.892 0 0 0-.524 1.613Z"></path><path data-name="Path 1470" d="M11.667 3.25a.4.4 0 1 0 .566-.566l-.856-.856a.4.4 0 0 0-.566.566Z"></path><path data-name="Path 1471" d="M15.372 3.367a.4.4 0 0 0 .283-.117l.856-.856a.4.4 0 1 0-.566-.566l-.856.856a.4.4 0 0 0 .283.683Z"></path><path data-name="Path 1472" d="M13.661 2.511a.4.4 0 0 0 .4-.4V.4a.4.4 0 1 0-.8 0v1.711a.4.4 0 0 0 .4.4Z"></path></g></svg>
    //                         </div>
    //                         <div className="menu-title">
    //                             <p>Event</p>
    //                         </div>
    //                     </div>
    //                     <div className="menu-single">
    //                         <div className="menu-icon">
    //                             <svg xmlns="http://www.w3.org/2000/svg" width="20.075" height="25.012" fill="#fff"><path data-name="Path 1459" d="M10.052 25.012a3.616 3.616 0 0 1-2.994-1.57 3.011 3.011 0 0 1-.087-3.633.607.607 0 0 1 .872-.058.637.637 0 0 1 .087.872c-.872 1.046.233 2.587 1.279 2.994a2.413 2.413 0 0 0 3.11-1.453 2.218 2.218 0 0 1 .785-1.192 2.508 2.508 0 0 1 1.453-.262h2.587a2.165 2.165 0 0 0 1.4-.32.816.816 0 0 0 .058-1.134.772.772 0 0 0-.174-.145c-.436-.291-1.279-.058-1.337-.814-.116-2.761-.349-7.5-.378-7.877-.349-3.779-2.151-5.959-4.97-6.569-.639-.145-.494-.872-.494-1.366a1.192 1.192 0 1 0-2.383 0c0 .465.145 1.25-.494 1.366-3.575.727-4.8 4.651-4.97 6.569a998.11 998.11 0 0 0-.378 7.906c-.029.727-.872.494-1.308.785a.772.772 0 0 0-.174 1.25c.436.349 2.994.291 3.6.32a.625.625 0 1 1-.029 1.25c-.61 0-3.226.174-4.36-.61a1.965 1.965 0 0 1-.087-3.023 2.4 2.4 0 0 1 1.1-.581c.116-2.529.2-4.069.378-7.47a9.148 9.148 0 0 1 1.979-5.148 6.6 6.6 0 0 1 3.488-2.354 2.853 2.853 0 0 1 .523-1.8 2.453 2.453 0 0 1 3.43-.436A1.557 1.557 0 0 1 12 .945a2.853 2.853 0 0 1 .523 1.8A6.62 6.62 0 0 1 16.04 5.07a9.456 9.456 0 0 1 1.947 5.2c.174 2.442.233 4.505.349 7.412a2.394 2.394 0 0 1 1.1.581 2.054 2.054 0 0 1 .087 2.878l-.145.145a4.466 4.466 0 0 1-2.994.61 14.377 14.377 0 0 0-2.558.058c-.058.029-.145.145-.291.552a3.74 3.74 0 0 1-3.483 2.506Z" fill="#fff"></path></svg>
    //                         </div>
    //                         <div className="menu-title">
    //                             <p>Notices</p>
    //                         </div>
    //                     </div>
    //                     <div className="menu-single">
    //                         <div className="menu-icon">
    //                             <svg xmlns="http://www.w3.org/2000/svg" width="22.372" height="23.197" fill="#fff"><path data-name="chat (5)" d="M18.74 19.438a11.183 11.183 0 1 0-4.519 2.517c5.612 1.29 5.318 1.241 5.445 1.241a.589.589 0 0 0 .527-.852Zm-4.535 1.32a.59.59 0 0 0-.167.024 10.018 10.018 0 1 1 3.594-1.938.589.589 0 0 0-.147.714l1.1 2.194c-4.472-1.024-4.257-.993-4.383-.993Z" fill="#fff"></path></svg>
    //                         </div>
    //                         <div className="menu-title">
    //                             <p>Speeches</p>
    //                         </div>
    //                     </div>
    //                     <div className="menu-single">
    //                         <div className="menu-icon">
    //                             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="23.636" fill="#fff"><g data-name="user, account, people, man" fill="#fff"><path data-name="Path 1464" d="M17.034 11.983a.909.909 0 1 0-1.278 1.293 8.125 8.125 0 0 1 2.426 5.815c0 1.112-3.187 2.727-8.182 2.727s-8.182-1.616-8.182-2.729a8.126 8.126 0 0 1 2.4-5.784.91.91 0 1 0-1.286-1.286A9.933 9.933 0 0 0 0 19.091c0 2.952 5.152 4.545 10 4.545s10-1.593 10-4.545a9.927 9.927 0 0 0-2.966-7.108Z"></path><path data-name="Path 1465" d="M10 12.727a6.364 6.364 0 1 0-6.364-6.363A6.364 6.364 0 0 0 10 12.727Zm0-10.909a4.545 4.545 0 1 1-4.545 4.545A4.545 4.545 0 0 1 10 1.818Z"></path></g></svg>
    //                         </div>
    //                         <div className="menu-title">
    //                             <p>Account</p>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>
    //              <div className="menu-open-close">
    //                     <div className="open-close-icon">
    //                         <i className="fa fa-caret-down" id="menu-toggle"></i>
    //                     </div>
    //                 </div>
    //             </div>
                
    // </div>
    <div className="red-nav flex justify-center relative items-center">
            <nav className={`nav-two ${showNav ? 'show-red-nav' : ''}`}>
                <div className="red-nav-links flex">
                    <div className="red-nav-items ">
                        <a href="/" className="flex">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="23.509" height="23.512" fill="#fff"><path data-name="home (2)" d="M22.878 10.227 13.285.634a2.164 2.164 0 0 0-3.061 0L.638 10.22l-.01.01a2.164 2.164 0 0 0 1.44 3.688h.449v7.058a2.536 2.536 0 0 0 2.533 2.533H8.8a.689.689 0 0 0 .689-.689v-5.53a1.157 1.157 0 0 1 1.156-1.156h2.213a1.157 1.157 0 0 1 1.156 1.156v5.534a.689.689 0 0 0 .689.689h3.752a2.536 2.536 0 0 0 2.533-2.533v-7.059h.354a2.165 2.165 0 0 0 1.532-3.694Zm-.978 2.086a.782.782 0 0 1-.556.231H20.3a.689.689 0 0 0-.689.689v7.747a1.157 1.157 0 0 1-1.156 1.156h-3.06V17.29a2.536 2.536 0 0 0-2.533-2.533h-2.214a2.536 2.536 0 0 0-2.534 2.533v4.845H5.051A1.157 1.157 0 0 1 3.9 20.979v-7.747a.689.689 0 0 0-.689-.689H2.149a.786.786 0 0 1-.542-1.342L11.2 1.608a.786.786 0 0 1 1.113 0l9.587 9.593a.789.789 0 0 1 0 1.112Zm0 0" fill="#fff"></path></svg>
                            </div>
                            <span>
                                Home
                            </span>
                        </a>
                    </div>
                    <div className="red-nav-items">
                        <a href="/" className="flex">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="#fff"><g fill="#fff"><path data-name="Path 1453" d="M19.8 24H5.4A5.406 5.406 0 0 1 0 18.6V1.8A1.8 1.8 0 0 1 1.8 0H15a1.8 1.8 0 0 1 1.8 1.8v9.6a.6.6 0 1 1-1.2 0V1.8a.6.6 0 0 0-.6-.6H1.8a.6.6 0 0 0-.6.6v16.8a4.2 4.2 0 0 0 4.2 4.2h14.4a.6.6 0 1 1 0 1.2Z"></path><path data-name="Path 1454" d="M19.8 24a4.2 4.2 0 0 1-4.2-4.2v-9.6a.6.6 0 0 1 .6-.6h6a1.8 1.8 0 0 1 1.8 1.8v8.4a4.2 4.2 0 0 1-4.2 4.2Zm-3-13.2v9a3 3 0 1 0 6 0v-8.4a.6.6 0 0 0-.6-.6Z"></path><path data-name="Path 1455" d="M12 10.8H4.8A1.8 1.8 0 0 1 3 9V5.4a1.8 1.8 0 0 1 1.8-1.8H12a1.8 1.8 0 0 1 1.8 1.8V9a1.8 1.8 0 0 1-1.8 1.8Zm-7.2-6a.6.6 0 0 0-.6.6V9a.6.6 0 0 0 .6.6H12a.6.6 0 0 0 .6-.6V5.4a.6.6 0 0 0-.6-.6Z"></path><path data-name="Path 1456" d="M13.2 13.8H3.6a.6.6 0 1 1 0-1.2h9.6a.6.6 0 0 1 0 1.2Z"></path><path data-name="Path 1457" d="M13.2 16.8H3.6a.6.6 0 0 1 0-1.2h9.6a.6.6 0 0 1 0 1.2Z"></path><path data-name="Path 1458" d="M7.8 19.8H3.6a.6.6 0 1 1 0-1.2h4.2a.6.6 0 1 1 0 1.2Z"></path></g></svg>
                            </div>
                            <span>
                                Press
                            </span>
                        </a>
                    </div>
                    <div className="red-nav-items">
                        <a href="/" className="flex">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="27.323" height="22.618" fill="#fff"><g data-name="Group 11527" fill="#fff"><path data-name="Path 1466" d="M3.8 20.276v-8.325a.4.4 0 0 0-.8 0v8.156h-.916v-9.468h.883a1.255 1.255 0 0 0 .828-2.2v-1.2a1.258 1.258 0 0 0-.856-1.19V5.013a1.256 1.256 0 1 0-.8 0v1.042a1.258 1.258 0 0 0-.856 1.19v1.2a1.253 1.253 0 0 0 0 1.886v9.949A2.114 2.114 0 0 0 0 22.218a.4.4 0 0 0 .4.4h4.278a.4.4 0 0 0 .4-.4A2.114 2.114 0 0 0 3.8 20.276ZM2.967 9.839h-.856a.456.456 0 1 1 0-.911h.856a.456.456 0 0 1 0 .911Zm-.428-6.472a.455.455 0 1 1-.455.455.456.456 0 0 1 .455-.454Zm-.455 3.878a.456.456 0 0 1 .911 0v.884h-.911ZM.863 21.817a1.313 1.313 0 0 1 1.248-.911h.856a1.313 1.313 0 0 1 1.248.911Z"></path><path data-name="Path 1467" d="M26.04 20.276v-9.949a1.253 1.253 0 0 0 0-1.886v-1.2a1.258 1.258 0 0 0-.856-1.19V5.013a1.256 1.256 0 1 0-.8 0v1.042a1.258 1.258 0 0 0-.856 1.19v1.2a1.253 1.253 0 0 0 0 1.886v9.949a2.115 2.115 0 0 0-1.283 1.942.4.4 0 0 0 .4.4h4.278a.4.4 0 0 0 .4-.4 2.114 2.114 0 0 0-1.283-1.946ZM23.905 9.383a.456.456 0 0 1 .455-.455h.856a.456.456 0 0 1 0 .911h-.856a.456.456 0 0 1-.455-.456Zm.883-6.017a.455.455 0 1 1-.455.455.456.456 0 0 1 .451-.453Zm-.455 3.878a.456.456 0 1 1 .911 0v.884h-.911Zm0 3.394h.911v9.468h-.911Zm-1.228 11.179a1.313 1.313 0 0 1 1.248-.911h.856a1.313 1.313 0 0 1 1.248.911Z"></path><path data-name="Path 1468" d="M18.757 11.006a.4.4 0 1 0-.78.18l2.454 10.632H6.892l2.454-10.632a.4.4 0 1 0-.78-.18L5.999 22.128a.4.4 0 0 0 .39.49h14.545a.4.4 0 0 0 .39-.49Z"></path><path data-name="Path 1469" d="m8.033 8.744 2.631 1.911-1 3.093a.891.891 0 0 0 1.372 1l2.631-1.912 2.631 1.912a.878.878 0 0 0 1.048 0 .878.878 0 0 0 .324-1l-1-3.093 2.631-1.912a.891.891 0 0 0-.524-1.613h-1.683a.4.4 0 0 0 0 .8h1.683a.091.091 0 0 1 .054.165l-2.866 2.082a.4.4 0 0 0-.145.448l1.095 3.369a.091.091 0 0 1-.14.1l-2.866-2.082a.4.4 0 0 0-.47 0l-2.866 2.082a.091.091 0 0 1-.14-.1l1.095-3.369a.4.4 0 0 0-.145-.448L8.517 8.095a.091.091 0 0 1 .053-.165h3.543a.4.4 0 0 0 .381-.277l1.095-3.369a.091.091 0 0 1 .173 0l1.095 3.369a.4.4 0 1 0 .761-.247l-1.095-3.369a.891.891 0 0 0-1.7 0l-1 3.093H8.559a.892.892 0 0 0-.524 1.613Z"></path><path data-name="Path 1470" d="M11.667 3.25a.4.4 0 1 0 .566-.566l-.856-.856a.4.4 0 0 0-.566.566Z"></path><path data-name="Path 1471" d="M15.372 3.367a.4.4 0 0 0 .283-.117l.856-.856a.4.4 0 1 0-.566-.566l-.856.856a.4.4 0 0 0 .283.683Z"></path><path data-name="Path 1472" d="M13.661 2.511a.4.4 0 0 0 .4-.4V.4a.4.4 0 1 0-.8 0v1.711a.4.4 0 0 0 .4.4Z"></path></g></svg>
                            </div>
                            <span>
                                Event
                            </span>
                        </a>
                    </div>
                    <div className="red-nav-items">
                        <a href="/" className="flex">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20.075" height="25.012" fill="#fff"><path data-name="Path 1459" d="M10.052 25.012a3.616 3.616 0 0 1-2.994-1.57 3.011 3.011 0 0 1-.087-3.633.607.607 0 0 1 .872-.058.637.637 0 0 1 .087.872c-.872 1.046.233 2.587 1.279 2.994a2.413 2.413 0 0 0 3.11-1.453 2.218 2.218 0 0 1 .785-1.192 2.508 2.508 0 0 1 1.453-.262h2.587a2.165 2.165 0 0 0 1.4-.32.816.816 0 0 0 .058-1.134.772.772 0 0 0-.174-.145c-.436-.291-1.279-.058-1.337-.814-.116-2.761-.349-7.5-.378-7.877-.349-3.779-2.151-5.959-4.97-6.569-.639-.145-.494-.872-.494-1.366a1.192 1.192 0 1 0-2.383 0c0 .465.145 1.25-.494 1.366-3.575.727-4.8 4.651-4.97 6.569a998.11 998.11 0 0 0-.378 7.906c-.029.727-.872.494-1.308.785a.772.772 0 0 0-.174 1.25c.436.349 2.994.291 3.6.32a.625.625 0 1 1-.029 1.25c-.61 0-3.226.174-4.36-.61a1.965 1.965 0 0 1-.087-3.023 2.4 2.4 0 0 1 1.1-.581c.116-2.529.2-4.069.378-7.47a9.148 9.148 0 0 1 1.979-5.148 6.6 6.6 0 0 1 3.488-2.354 2.853 2.853 0 0 1 .523-1.8 2.453 2.453 0 0 1 3.43-.436A1.557 1.557 0 0 1 12 .945a2.853 2.853 0 0 1 .523 1.8A6.62 6.62 0 0 1 16.04 5.07a9.456 9.456 0 0 1 1.947 5.2c.174 2.442.233 4.505.349 7.412a2.394 2.394 0 0 1 1.1.581 2.054 2.054 0 0 1 .087 2.878l-.145.145a4.466 4.466 0 0 1-2.994.61 14.377 14.377 0 0 0-2.558.058c-.058.029-.145.145-.291.552a3.74 3.74 0 0 1-3.483 2.506Z" fill="#fff"></path></svg>
                            </div>
                            <span>
                                Notices
                            </span>
                        </a>
                    </div>
                    <div className="red-nav-items">
                        <a href="/" className="flex">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="22.372" height="23.197" fill="#fff"><path data-name="chat (5)" d="M18.74 19.438a11.183 11.183 0 1 0-4.519 2.517c5.612 1.29 5.318 1.241 5.445 1.241a.589.589 0 0 0 .527-.852Zm-4.535 1.32a.59.59 0 0 0-.167.024 10.018 10.018 0 1 1 3.594-1.938.589.589 0 0 0-.147.714l1.1 2.194c-4.472-1.024-4.257-.993-4.383-.993Z" fill="#fff"></path></svg>
                            </div>
                            <span>
                                Speechess
                            </span>
                        </a>
                    </div>
                    <div className="red-nav-items">
                        <a href="/" className="flex">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="23.636" fill="#fff"><g data-name="user, account, people, man" fill="#fff"><path data-name="Path 1464" d="M17.034 11.983a.909.909 0 1 0-1.278 1.293 8.125 8.125 0 0 1 2.426 5.815c0 1.112-3.187 2.727-8.182 2.727s-8.182-1.616-8.182-2.729a8.126 8.126 0 0 1 2.4-5.784.91.91 0 1 0-1.286-1.286A9.933 9.933 0 0 0 0 19.091c0 2.952 5.152 4.545 10 4.545s10-1.593 10-4.545a9.927 9.927 0 0 0-2.966-7.108Z"></path><path data-name="Path 1465" d="M10 12.727a6.364 6.364 0 1 0-6.364-6.363A6.364 6.364 0 0 0 10 12.727Zm0-10.909a4.545 4.545 0 1 1-4.545 4.545A4.545 4.545 0 0 1 10 1.818Z"></path></g></svg>
                            </div>
                            <span>
                                Account
                            </span>
                        </a>
                    </div>
                </div>
            </nav>
            <span className={`nav-icon ${showNav ? 'show-icon': ''}`} onClick={()=> setShowNav(!showNav)}>
                v
            </span>
        </div>
  )
}

export default RedFooterNav