import { useState } from 'react'
import { BrowserRouter, Routes, Route, useNavigate, useParams, Link } from 'react-router-dom'
import './TodoApp.css'

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



function LoginComponent() {

    const [username, setUsername] = useState('username')
    const [password, setPassword] = useState('')
    const [showSuccess, setshowSuccess] = useState(false)
    const [showError, setshowError] = useState(false)

    const navigate = useNavigate()


    function handleUsernameChange(event) {
        setUsername(event.target.value)
    }

    function handlePasswordChange(event) {
        setPassword(event.target.value)
    }
    function handleSubmit() {
        if (username === 'babo' && password === 'asd') {
            console.log('success')
            setshowSuccess(true)
            setshowError(false)
            navigate(`/welcome/${username}`)
        } else {
            console.log('fail')
            setshowSuccess(false)
            setshowError(true)
            navigate('/error')
        }
    }

    return (
        <div className="Login">
            {showSuccess && <div className="successMessage">Authenticated Succesfuly</div>}
            {showError && <div className="errorMessage"> Error </div>}

            <div className="LoginForm">
                <div>
                    <label>User Name</label>
                    <input type="text" name="username" value={username} onChange={handleUsernameChange} />
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" name="password" onChange={handlePasswordChange} />
                </div>
                <div>
                    <button type="button" name="login" onClick={handleSubmit}>login</button>
                </div>
            </div>

        </div>
    )
}



function WelcomeComponent() {

    const { username } = useParams()

    return (
        <div>
            <div className="Welcome">Welcome {username}</div>
            <div>
                Your todos - <Link to="/todos">GO Here</Link>
            </div>
        </div>

    )
}

function ErrorComponent() {
    return (
        <div className="ErrorComponent">
            <h1>404</h1>
            <div>No such URL</div>
        </div>

    )
}

function ListTodosComponent() {
    const today = new Date()
    const TargetDate = new Date(today.getFullYear() + 12, today.getMonth(), today.getDay())
    const todos = [
        { id: 1, description: 'Learn smt', done: false, targetDate: TargetDate },
        { id: 2, description: 'do more based on that', done: false, targetDate: TargetDate },
        { id: 3, description: 'never mistake', done: false, targetDate: TargetDate },
    ]

    return (
        <div className="container">
            <h1>List what to Do !</h1>
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <td>id</td>
                            <td>description</td>
                            <td>Is Done ?</td>
                            <td>Target Date</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            todos.map(
                                todo => (
                                    <tr key={todo.id}>
                                        <td>{todo.id}</td>
                                        <td>{todo.description}</td>
                                        <td>{todo.done.toString()}</td>
                                        <td>{todo.targetDate.toDateString()}</td>
                                    </tr>
                                )
                            )
                        }

                    </tbody>
                </table>
            </div>
            <div>List your todos</div>
        </div>

    )
}

function HeaderComponent() {
    return (
        <header className="border-bottom border-light border-5 mb-5 p-2">
            <div className="container">
                <div className="row">
                    <nav className="navbar navbar-expand-lg">
                        <a className="navbar-brand ms-2 fs-2 fw-bold text-black" href="https://www.in28minutes.com">google</a>
                        <div className="collapse navbar-collapse">
                            <ul className="navbar-nav">
                                <li className="nav-item fs-5"><Link className="nav-link" to="/welcome/in28minutes">Home</Link></li>
                                <li className="nav-item fs-5"><Link className="nav-link" to="/todos">Todos</Link></li>
                            </ul>
                        </div>
                        <ul className="navbar-nav">
                            <li className="nav-item fs-5"><Link className="nav-link" to="/login">Login</Link></li>
                            <li className="nav-item fs-5"><Link className="nav-link" to="/logout">Logout</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>

    )
}

function FooterComponent() {
    return (
        <footer className="footer">
            <div class="container">
                Your Footer
            </div>
        </footer>

    )
}

function LogoutComponent() {
    return (
        <div className="logout">
            You re logged out. c ya
        </div>

    )
}


