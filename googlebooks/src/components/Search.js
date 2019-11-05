import React from 'react'

const Search = (props) => {
    return(
        <div className="search">
            <form 
            onSubmit={props.handleFormSubmit}
            action=""
            >
                <input 
                type="text"
                onChange={props.handleSearch}
                />
                <button type="submit">Search</button>
            </form>
        </div>
    )
}
export default Search;