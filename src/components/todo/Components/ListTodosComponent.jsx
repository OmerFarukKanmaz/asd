export default function ListTodosComponent() {
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