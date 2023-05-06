const Filter = ( {filterName, newFilter, newFilterChange} ) => {
    return (
        <form onChange={filterName}>
            filter shown with <input value={newFilter} onChange={newFilterChange}/>
        </form>
    )
}

export default Filter
