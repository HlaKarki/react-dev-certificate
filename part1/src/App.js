import { useState } from "react";

const Display = props => <div>{props.value}</div>

const Button = props => (
    <button onClick={props.handleClick}>
        {props.text}
    </button>
)

const App = () => {
    const [value, setValue] = useState(10)

    const setToValue = (thisValue) => () => {
        setValue(thisValue)
    }

    return (
        <div>
            {value}
            <Button handleClick={setToValue(1000)} text="thousand" />
            <Button handleClick={setToValue(0)} text="reset" />
            <Button handleClick={setToValue(value + 1)} text="increment" />
        </div>
    )
}

export default App
