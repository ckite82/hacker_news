import React from 'react';
import Story from './Story';


const StoryList = ({stories}) => {

    if(stories == null){
        return<p>Loading...</p>
    }

    return(
        <div>
        {stories.map((story, index) => {
        return <Story key={index + 1} by={story.by} title = {story.title} url={story.url}></Story>
            }
        )}
        </div>

    )
}

export default StoryList;