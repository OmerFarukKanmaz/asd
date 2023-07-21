import { useState } from 'react'
import { PropTypes } from 'prop-types';
import './Counter.css'

export default function Counter() {

    const [count, setCount] = useState(0);

    function increment(by) {
        setCount(count + by)
    }

    function decrement(by) {
        setCount(count - by)

    }

    return (
        <>
            <span className="totalCount">{count}</span>
            <CounterButton by={1} increment={increment} decrement={decrement} />
            <CounterButton by={2} increment={increment} decrement={decrement} />
            <CounterButton by={3} increment={increment} decrement={decrement} />
        </>
    )
}

function CounterButton({ by, increment, decrement }) {

    const [count, setCount] = useState(0)

    function incrementCounterFunction() {
        setCount(count + by)
        increment(by)
    }
    function decrementCounterFunction() {
        setCount(count - by)
        decrement(by)
    }

    return (
        <div className="Counter">
            <span className="count">{count}</span>
            <div>
                <button className="counterButton"
                    onClick={incrementCounterFunction}
                >+{by}</button>

                <button className="counterButton"
                    onClick={decrementCounterFunction}
                >-{by}</button>
            </div>
        </div>
    )
}
CounterButton.protoType = {
    by: PropTypes.number
}

CounterButton.defaultProps = {
    by: 5
};