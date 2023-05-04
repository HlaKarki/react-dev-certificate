import { useState } from 'react'

const App = () => {
    const [persons, setPersons] = useState([
        {
            name: 'Arto Hellas',
            number: '040-1234567'
        }
    ])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')

    const addNewName = (event) => {
        event.preventDefault()
        const newObject = {
            name: newName,
            number: newNumber
        }
        const isValid = persons.find(person => person.name === newObject.name && person.name !== '')
        isValid ? alert(`${newObject.name} is already added to phonebook`) : setPersons(persons.concat(newObject))
        setNewName('')
        setNewNumber('')
    }

    const newNameChange = (event) => {
        setNewName(event.target.value)
    }

    const newNumberChange = (event) => {
        setNewNumber(event.target.value)
    }

    return (
        <div>
            <h2>Phonebook</h2>
            <form onClick={addNewName}>
                <div>
                    name: <input value={newName} onChange={newNameChange}/>
                </div>
                <div>
                    number: <input value={newNumber} onChange={newNumberChange}/>
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
            <h2>Numbers</h2>
            { persons.map(person => <div key={person.name}>{person.name} {person.number}</div>) }
        </div>
    )
}

export default App
