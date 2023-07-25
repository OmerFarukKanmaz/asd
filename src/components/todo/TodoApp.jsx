import { useState } from 'react'
import { BrowserRouter, Routes, Route, useNavigate, useParams } from 'react-router-dom'
import './TodoApp.css'

export default function TodoApp() {
    return (
        <div className="TodoApp">
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<LoginComponent />}></Route>
                    <Route path='/login' element={<LoginComponent />}></Route>
                    <Route path='/welcome/:username' element={<WelcomeComponent />}></Route>
                    <Route path='*' element={<ErrorComponent />}></Route>
                    <Route path='todos' element={<ListTodosComponent />}></Route>
                </Routes>
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
        <div className="Welcome">Welcome {username}</div>

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
    const todos = [
        { id: 1, description: 'Learn smt' },
        { id: 2, description: 'do more based on that' },
        { id: 3, description: 'never mistake' },
    ]


    return (
        <div className="ListTodosComponent">
            <h1>List what to Do !</h1>
            <div>
                <table>
                    <thead>
                        <tr>
                            <td>id</td>
                            <td>description</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            todos.map(
                                todo => (
                                    <tr key={todo.id}>
                                        <td>{todo.id}</td>
                                        <td>{todo.description}</td>
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
