import React from 'react'
import { FrontPage } from '../../pages/FrontPage/FrontPage'
import { PageNotFound } from '../../pages/PageNotFound/PageNotFound'
import { LineUp } from '../../pages/LineUp/LineUp'
import { Program } from '../../pages/Program/Program'
import { Camps } from '../../pages/Camps/Camps'
import { Info } from '../../pages/Info/Info'
import { Tickets } from '../../pages/Tickets/Tickets'
import { Login } from '../../pages/Login/Login'
import { Route, Routes } from 'react-router-dom'

export const AppRouter = () => {
  return (
    <Routes>
        <Route index element={<FrontPage />}/>
        <Route path='/Lineup' element={<LineUp />} />
        <Route path='/Program' element={<Program />}/>
        <Route path='/Camps' element={<Camps />} />
        <Route path='/Info' element={<Info />}/>
        <Route path='/Billetter' element={<Tickets />}/>
        <Route path='/Login' element={<Login />} />
        <Route path="*" element={<PageNotFound />}></Route>
    </Routes>
  )
}
