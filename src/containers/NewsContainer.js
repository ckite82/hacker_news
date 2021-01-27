import React, {useState, useEffect} from 'react';
import StoryList from '../components/StoryList'


const NewsContainer = () => {

    // const[topStories, setTopStories] = useState({});
    const[stories, setStories] = useState([]);
    // const[selectedTopStoriesId, setSelectedTopStoriesId] = useState(1);
    // const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
        .then(res => res.json())
        .then(data => {
            const newData = data.slice(0, 20)


            const promises = newData.map(id=>{
                return fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
            
                .then(res => res.json())
            })

        Promise.all(promises)
        .then(result => {
            setStories(result);
        })

    })
},[])

    return (
        <>
        <h1>Hacker News Top Stories</h1>
        <StoryList
        stories={stories}
        ></StoryList>
        </>
    )
}

export default NewsContainer;
        
        
    





    // const getTopStories = () => {
    //     console.log("getting top stories");
    //     fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
    //     .then(res => res.json())
    //     .then(data => setTopStories(data))
    //     .then(() =>setLoaded(true));
    // }

    // const getStory = () => {
    //     console.log("getting current story");
    //     fetch(`https://hacker-news.firebaseio.com/v0/item/${selectedTopStoriesId}.json`)
    //     .then(res => res.json())
    //     .then(data => setStory(data))
    // }





