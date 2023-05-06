const PersonForm = ( {addNewName, newName, newNameChange, newNumber, newNumberChange} ) => {
    return (
        <form onSubmit={addNewName}>
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
    )
}

export default PersonForm