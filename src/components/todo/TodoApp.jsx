import './TodoApp.css'

export default function TodoApp() {
    return (
        <div className="TodoApp">
            Todo Application
            <LoginComponent />
        </div>
    )
}

function LoginComponent() {
    return (
        <div className="Login">
            <div className="LoginForm">
                <div>
                    <label>User Name</label>
                    <input type="text" name="username" value="username" />
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" name="password" />
                </div>
                <div>
                    <button type="button" name="login">login</button>
                </div>
            </div>

        </div>
    )
}

function WelcomeComponent() {
    return (
        <div className="Welcome">Welcome Component</div>
    )
}