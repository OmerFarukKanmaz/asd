import { PropTypes } from 'prop-types';
import { useState } from 'react'

export default function CounterButton({ by, increment, decrement }) {

    return (
        <div className="Counter">
            <div>
                <button className="counterButton"
                    onClick={() => increment(by)}
                >+{by}</button>

                <button className="counterButton"
                    onClick={() => decrement(by)}
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