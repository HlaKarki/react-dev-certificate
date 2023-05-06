import { useState } from 'react'
import { default as Filter } from './components/part2/Filter'
import { default as PersonForm } from './components/part2/PersonForm'
import { default as Persons } from './components/part2/Persons'
import { default as PersonsFiltered } from './components/part2/PersonsFiltered'

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
    const [newPersons, setNewPersons] = useState([])

    const addNewName = (event) => {
        event.preventDefault()
        const newObject = {
            name: newName,
            number: newNumber
        }
        const isValid = persons.find(person => (person.name === newObject.name || person.number === newObject.number) && person.name !== '')
        isValid ? alert(`${newObject.name} or ${newObject.number} is already added to phonebook`) : setPersons(persons.concat(newObject))
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
        const filteredPersons = persons.filter( person =>
            person.name.toLowerCase().includes(event.target.value.toLowerCase())
        )
        setNewPersons(filteredPersons)
    }

    const newFilterChange = (event) => {
        setNewFilter(event.target.value)
    }

    return (
        <div>
            <h2>Phonebook</h2>
            <Filter filterName={filterName} newFilter={newFilter} newFilterChange={newFilterChange}/>

            <h2>add a new</h2>
            <PersonForm addNewName={addNewName} newName={newName} newNameChange={newNameChange} newNumberChange={newNumberChange} newNumber={newNumber} />

            <h2>Numbers</h2>
            {newFilter!=='' ? <PersonsFiltered newPersons={newPersons}/> : <Persons persons={persons} />}

        </div>
    )
}

export default App
