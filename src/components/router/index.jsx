import React from 'react'
import { Route, Routes} from 'react-router-dom'

import HomePage from "./../pages/HomePage";
import HistoryPage from "./../pages/HistoryPage";
import RoyalCourtPage from "./../pages/RoyalCourtPage";
import TraditionalPage from "./../pages/TraditionalPage";

function RouterContainer() {
  return (
         <Routes>
           <Route path='/' element={<HomePage/>}/>
           <Route path='/history' element={<HistoryPage/>}/>
           <Route path='/royal-court' element={<RoyalCourtPage/>}/>
           <Route path='/traditional' element={<TraditionalPage/>}/>
        </Routes>
  )
}

export default RouterContainer