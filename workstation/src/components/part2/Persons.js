import { default as DeletePerson } from './DeletePerson'

const Persons = ({persons, deletePerson}) => {
    return (
        <div>
            { persons.map(person => <div key={person.name}>{person.name} {person.number} <DeletePerson deletePerson={deletePerson} name={person.name}/></div>) }
        </div>
    )
}

export default Persons