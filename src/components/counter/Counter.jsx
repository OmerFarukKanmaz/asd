import { useState } from 'react'
import './Counter.css'
import CounterButton from './Counterbutton'

export default function Counter() {

    const [count, setCount] = useState(0);

    function increment(by) {
        setCount(count + by)
    }

    function decrement(by) {
        setCount(count - by)
    }

    function resetCounter() {
        setCount(0)
    }

    return (
        <>
            <span className="totalCount">{count}</span>
            <CounterButton by={1} increment={increment} decrement={decrement} />
            <CounterButton by={2} increment={increment} decrement={decrement} />
            <CounterButton by={3} increment={increment} decrement={decrement} />
            <button className="resetButton"
                onClick={resetCounter}
            >Reset</button>
        </>
    )
}

