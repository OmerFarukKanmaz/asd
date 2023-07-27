import { useState } from 'react'
import { BrowserRouter, Routes, Route, useNavigate, useParams, Link } from 'react-router-dom'
import './TodoApp.css'
// import LogoutComponent from './LogoutComponent'
// import HeaderComponent from './HeaderComponent'
// import ErrorComponent from './Components/ErrorComponent'
// import ListTodosComponent from './ListTodosComponent'
// import LoginComponent from './LoginComponent'
// import WelcomeComponent from './Components/WelcomeComponent'

import * as Components from './Components'

export default function TodoApp() {
    return (
        <div className="TodoApp">
            <BrowserRouter>
                <HeaderComponent />
                <Routes>
                    <Route path='/' element={<Components.LoginComponent />}></Route>
                    <Route path='/login' element={<Components.LoginComponent />}></Route>
                    <Route path='/welcome/:username' element={<Components.WelcomeComponent />}></Route>
                    <Route path='*' element={<ErrorComponent />}></Route>
                    <Route path='todos' element={<ListTodosComponent />}></Route>
                    <Route path='logout' element={<LogoutComponent />}></Route>
                </Routes>
                <FooterComponent />
            </BrowserRouter>
        </div>
    )
}











