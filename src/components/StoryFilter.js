import React, {useState} from 'react';

const StoryFilter = ({getSearchText}) =>{

    const [text, setText] = useState("");


    const handleTextChange = (evt) =>{
        setText(evt.target.value);
        getSearchText(text);
    }
    


    return(
        <form action="">
            <input type="text" 
            placeholder="Search" 
            value={text} 
            onChange={handleTextChange}/>
        </form>
    )
}

export default StoryFilter;