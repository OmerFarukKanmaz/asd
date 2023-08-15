import { BrowserRouter, Routes, Route,} from 'react-router-dom'
import './TodoApp.css'
import LogoutComponent from './Components/LogoutComponent'
import HeaderComponent from './Components/HeaderComponent'
import ErrorComponent from './Components/ErrorComponent'
import ListTodosComponent from './Components/ListTodosComponent'
import LoginComponent from './Components/LoginComponent'
import WelcomeComponent from './Components/WelcomeComponent'
import FooterComponent from './Components/FooterComponent'


export default function TodoApp() {
    return (
        <div className="TodoApp">
            <BrowserRouter>
                <HeaderComponent />
                <Routes>
                    <Route path='/' element={<LoginComponent />}></Route>
                    <Route path='/login' element={<LoginComponent />}></Route>
                    <Route path='/welcome/:username' element={<WelcomeComponent />}></Route>
                    <Route path='*' element={<ErrorComponent />}></Route>
                    <Route path='todos' element={<ListTodosComponent />}></Route>
                    <Route path='logout' element={<LogoutComponent />}></Route>
                </Routes>
                <FooterComponent />
            </BrowserRouter>
        </div>
    )
}











