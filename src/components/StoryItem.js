import React from 'react';

const StoryItem = ({story, key}) => {

    return(
        <li>
            <h1><a href={story.url}>{story.title}</a></h1>
            <p>Posted by {story.by}.</p>
        </li>
    )
}

export default StoryItem;