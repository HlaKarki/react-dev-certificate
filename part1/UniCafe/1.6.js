import { useState } from "react";

const App = () => {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const handleClick = (setValue, value) => setValue(value+1)
    const Button = ( {setValue, value, text}) => <button onClick={() => handleClick(setValue, value)}>{text}</button>
    const Stats = ( {text, value}) => <div>{text} {value}</div>

    return (
        <div>
            <h1>give feedback</h1>
            <Button setValue={setGood} value={good} text={"good"} />
            <Button setValue={setNeutral} value={neutral} text={"neutral"} />
            <Button setValue={setBad} value={bad} text={"bad"} />

            <h1>statistics</h1>
            <Stats text={"good"} value={good} />
            <Stats text={"neutral"} value={neutral} />
            <Stats text={"bad"} value={bad} />

        </div>
    )
}

export default App
