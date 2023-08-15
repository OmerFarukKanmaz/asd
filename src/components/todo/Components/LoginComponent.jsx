import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function LoginComponent() {

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