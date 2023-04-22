import {useState} from 'react'

const Button = ( {handleClick, text} ) => <button onClick={handleClick}>{text}</button>

const App = () => {
    const anecdotes = [
        'If it hurts, do it more often.',
        'Adding manpower to a late software project makes it later!',
        'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
        'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        'Premature optimization is the root of all evil.',
        'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
        'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
        'The only way to go fast, is to go well.'
    ]

    const [selected, setSelected] = useState(0)
    const [votes, setVotes] = useState({})
    const [max, setMax] = useState({0:0, 1:0})

    const handleClick = () => {
        const random = Math.floor(Math.random() * 8)
        setSelected(random)
        console.log(random)
    }

    const setUpVotes = () => {
        const copy = {...votes}
        copy[selected] = (copy[selected] || 0) + 1
        setVotes(copy)
        updateMax(selected, copy[selected])
    }

    const updateMax = (selected, vote) => {
        const copy = {...votes}
        if (vote>max[1]) {
            copy[0] = selected
            copy[1] = vote
            setMax(copy)
        }

    }

    return (
        <div>
            <h1>Anecdote of the day</h1>
            <div>
                {anecdotes[selected]}
            </div>
            <div>
                has {votes[selected] || 0} votes
            </div>
            <div>
                <Button handleClick={setUpVotes} text={"vote"} />
                <Button handleClick={handleClick} text={"next anecdotes"}/>
            </div>

            <h1>Anecdote with most votes</h1>
            <div>
                {anecdotes[max[0]]}
            </div>
            <div>
                has {max[1]} votes
            </div>
        </div>
    )
}

export default App