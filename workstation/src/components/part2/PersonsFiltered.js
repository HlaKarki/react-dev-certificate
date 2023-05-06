const PersonsFiltered = ({newPersons}) => {
    return (
        <div>
            { newPersons.map(person => <div key={person.name}>{person.name} {person.number}</div>) }
        </div>
    )
}

export default PersonsFiltered