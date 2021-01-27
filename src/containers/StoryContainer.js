import React, { useEffect, useState } from 'react';
import StoryList from '../components/StoryList'

const StoryContainer = () => {

    const [stories, setStories] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        getStories();
    }, [])
    
    const getStories = () =>{
        fetch("https://hacker-news.firebaseio.com/v0/topstories.json")
        .then(res => res.json())
        .then(data => {
            const storiesIds = data.slice(0, 20)
            const promises = storiesIds.map(storyId => {
                return fetch(`https://hacker-news.firebaseio.com/v0/item/${storyId}.json`)
                .then(res => res.json())
            })
            Promise.all(promises) //brings back an array of whatever you've called
            .then((values) => {
                    setStories(values)
                })
                .then(setLoaded(true))
        
                
        })
        
    }
    return(
        <div>
            <h1>Top Stories</h1>
            <StoryList stories={stories} loaded={loaded}></StoryList>
        </div>
    )
}

export default StoryContainer;


