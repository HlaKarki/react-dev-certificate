const DeletePerson = ( {deletePerson, name}) => {
    return (
        <button onClick={() => deletePerson(name)}>delete</button>
    )
}

export default DeletePerson