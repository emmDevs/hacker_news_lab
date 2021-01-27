import React, { useEffect, useState } from 'react';
import './StoryContainer.css'
import StoryList from '../components/StoryList'
import StoryFilter from '../components/StoryFilter'

const StoryContainer = () => {

    const [stories, setStories] = useState([]);
    const [loaded, setLoaded] = useState(false);
    let [filteredText, setFilteredText] = useState([]);


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
                    setFilteredText(values)
                })
                .then(setLoaded(true))       
        })
    }

    const filter = (searchTerm) =>{
        const lowerSearch = searchTerm.toLowerCase();
        const filteredText = stories.filter((story) => {
            return story.title.toLowerCase().indexOf(lowerSearch) > -1
        });
        setFilteredText(filteredText);
}

    return(
        <div className="story_container">
            <h1>Top Stories</h1>
            <StoryFilter handleChange={filter}></StoryFilter> 
            <StoryList stories={filteredText} loaded={loaded}></StoryList>
        </div>
    )
}

export default StoryContainer;


