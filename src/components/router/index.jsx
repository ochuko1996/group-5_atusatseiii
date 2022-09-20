import React,{useState} from 'react'
import { Route, Routes} from 'react-router-dom'

import HomePage from "./../pages/HomePage";
import TheGinuwa from "./../pages/TheGinuwa";
import HistoryPage from "./../pages/HistoryPage";
import RoyalCourtPage from "./../pages/RoyalCourtPage";
import TraditionalPage from "./../pages/TraditionalPage";
import Login from '../pages/LoginPage';
import PressPage from '../pages/PressPage';
import Account from '../pages/Account';
import Event from '../pages/EventsPage';

function RouterContainer() {
  const [showFooter, setShowFooter] = useState(false)
  return (
         <Routes>
           <Route path='/' element={<HomePage showFooter={showFooter} setShowFooter={setShowFooter}/>}/>
           <Route path='/theginuwa' element={<TheGinuwa showFooter={showFooter} setShowFooter={setShowFooter}/>}/>
           <Route path='/history' element={<HistoryPage showFooter={showFooter} setShowFooter={setShowFooter}/>}/>
           <Route path='/royal-court' element={<RoyalCourtPage showFooter={showFooter} setShowFooter={setShowFooter}/>}/>
           <Route path='/traditional' element={<TraditionalPage showFooter={showFooter} setShowFooter={setShowFooter}/>}/>
           <Route path='/login' element={<Login showFooter={showFooter} setShowFooter={setShowFooter}/>}/>
           <Route path='/account' element={<Account showFooter={showFooter} setShowFooter={setShowFooter}/>}/>
           <Route path='/press' element={<PressPage showFooter={showFooter} setShowFooter={setShowFooter}/>}/>
           <Route path='/event' element={<Event showFooter={showFooter} setShowFooter={setShowFooter}/>}/>
        </Routes>
  )
}

export default RouterContainer