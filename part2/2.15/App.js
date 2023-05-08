import { useState, useEffect } from 'react'
import { default as Filter } from './components/part2/Filter'
import { default as PersonForm } from './components/part2/PersonForm'
import { default as Persons } from './components/part2/Persons'
import { default as PersonsFiltered } from './components/part2/PersonsFiltered'
import { default as phonebookService } from './services/phonebook'

const App = () => {
    const [persons, setPersons] = useState([])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [newFilter, setNewFilter] = useState('')
    const [newPersons, setNewPersons] = useState([])

    const hook = () => {
        phonebookService.getAll()
            .then(allPersons => setPersons(allPersons))
    }
    useEffect(hook, [])

    const addNewName = (event) => {
        event.preventDefault()
        const newObject = {
            name: newName,
            number: newNumber
        }
        const isNotValid = persons.find(person => (person.name === newObject.name) && person.name !== '')
        if (isNotValid) {
            const confirm = window.confirm(`${newObject.name} is already added to phonebook. Do you wish to replace the old number with a new one?`)
            if (confirm) {
                phonebookService.updateContact(isNotValid.id, newObject)
                    .then(newPersons => {
                        setPersons(persons.map(p => p.id !== isNotValid.id ? p : newPersons))
                    })
            }

        }
        else {
            phonebookService.create(newObject).then(responseData => setPersons(persons.concat(responseData)))
        }
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

    const deletePerson = (name) => {
        const confirmed = window.confirm(`Delete ${name} ?`)
        if (confirmed) {
            const thisPerson = persons.find(person =>
                person.name === name
            )
            phonebookService.deleteP(thisPerson.id)
                .then(() => {
                    const remainingPersons = persons.filter(person => person.id !== thisPerson.id)
                    setPersons(remainingPersons)
                })
        }
    }

    return (
        <div>
            <h2>Phonebook</h2>
            <Filter filterName={filterName} newFilter={newFilter} newFilterChange={newFilterChange}/>

            <h2>add a new</h2>
            <PersonForm addNewName={addNewName} newName={newName} newNameChange={newNameChange} newNumberChange={newNumberChange} newNumber={newNumber} />

            <h2>Numbers</h2>
            {newFilter!=='' ? <PersonsFiltered newPersons={newPersons}/> : <Persons persons={persons} deletePerson={deletePerson}/>}

        </div>
    )
}

export default App
