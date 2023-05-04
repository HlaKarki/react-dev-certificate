import { useState } from 'react'

const App = () => {
    const [persons, setPersons] = useState([
        {name: 'Arto Hellas'}
    ])
    const [newName, setNewName] = useState('')

    const addNewName = (event) => {
        event.preventDefault()
        const newObject = {
            name: newName
        }
        const isValid = persons.find(person => person.name === newObject.name && person.name !== '')
        isValid ? alert(`${newObject.name} is already added to phonebook`) : setPersons(persons.concat(newObject))
        setNewName('')
    }

    const handleChange = (event) => {
        setNewName(event.target.value)
    }

    return (
        <div>
            <h2>Phonebook</h2>
            <form onClick={addNewName}>
                <div>
                    name: <input value={newName} onChange={handleChange}/>
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
            <h2>Numbers</h2>
            { persons.map(person => <div key={person.name}>{person.name}</div>) }
        </div>
    )
}

export default App
