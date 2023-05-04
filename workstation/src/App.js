import { useState } from 'react'

const App = () => {
    const [persons, setPersons] = useState([
        { name: 'Arto Hellas', number: '040-123456', id: 1 },
        { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
        { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
        { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
    ])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [newFilter, setNewFilter] = useState('')

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

    const filterName = (event) => {
        event.preventDefault()
        if (event.target.value === '') {
            setPersons([
                { name: 'Arto Hellas', number: '040-123456', id: 1 },
                { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
                { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
                { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
            ]);
        } else {
            const filteredPersons = persons.filter( person =>
                person.name.toLowerCase().includes(event.target.value.toLowerCase())
            )
            setPersons(filteredPersons)
        }

    }

    const newFilterChange = (event) => {
        setNewFilter(event.target.value)
    }

    return (
        <div>
            <h2>Phonebook</h2>
            <form onChange={filterName}>
                filter shown with <input value={newFilter} onChange={newFilterChange}/>
            </form>

            <h2>add a new</h2>
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
