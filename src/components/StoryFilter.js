import React, {useEffect, useState} from 'react';

const StoryFilter = ({handleChange}) =>{

    const [searchTerm, setSearchTerm] = useState("");

    const changeSearchTerm = (event) => {
        event.preventDefault();
        setSearchTerm(event.target.value);
    }

    useEffect(() => {
        handleChange(searchTerm);
    }, [searchTerm]);

    const handleSubmit = (event) =>{
        event.preventDefault();
    }
    


    return(
        <form onSubmit={handleSubmit}>
            <input 
            onChange={changeSearchTerm}
            type="text" 
            placeholder="Search" 
            name="SearchTerm"
            value={searchTerm} 
            />
        </form>
    )
}

export default StoryFilter;