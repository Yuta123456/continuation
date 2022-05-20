import Post from "./Post";
import React from 'react';
const Timeline: React.FC = () => {
    return(
        <>
            {[...Array(5)].map((_, index) => <Post key={index} post_id={index.toString()} hey="aaa"></Post>)}
        </>
    );
}

export default Timeline;