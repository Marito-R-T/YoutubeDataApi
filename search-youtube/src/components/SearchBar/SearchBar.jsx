import React, {useState} from 'react';

const SearchBar = (props) => {
    const [term, setTerm] = useState("");

    const onFormSubmit = (e) => {
        e.preventDefault();
        props.onSubmit(term);
    }

    return (
            <form className="ui form" onSubmit={onFormSubmit}>
                <div className="ui icon input">
                    <i className="search icon"></i>
                    <input 
                        type="text"
                        placeholder='Search'
                        onChange={ (e) => setTerm(e.target.value) } />
                </div>
            </form>
    )
}

export default SearchBar;