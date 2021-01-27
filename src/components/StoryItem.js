import React from 'react';

const StoryItem = ({story, key}) => {

    return(
        <li>
            <h3>Author: {story.by}</h3>
            <h4>Title: {story.title}</h4>
        </li>
    )
}

export default StoryItem;