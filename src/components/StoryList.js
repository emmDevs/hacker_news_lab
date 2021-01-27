import React from 'react';
import StoryItem from './StoryItem'

const StoryList = ({ stories, loaded}) =>{
    console.log("before if statement", loaded)
if(!loaded){
    return <p>Loading...</p>
}
    console.log(`loaded AFTER if : ${loaded}`);

const storyArray = stories.map((story, i) => {
    return (
        <StoryItem story={story} key={story.id} position={i+1}></StoryItem>
        )
    })


    return(
        <div>
        <ul>
            {storyArray}
        </ul>
        </div>
    )
}

export default StoryList;