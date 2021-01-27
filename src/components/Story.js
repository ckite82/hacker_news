import React from 'react';
import '../style/Story.css'

const Story = (story) => {


    
    return (
        <>
        <h3><a href={story.url}>{story.title}</a></h3>
        <h4>Story by {story.by}</h4>
        
        </>
    )
}

export default Story;