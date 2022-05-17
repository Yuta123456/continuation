import { useEffect } from "react";
import Post from "./Post";

const Timeline: React.FC = () => {
    return(
        <>
            {[...Array(5)].map((_, index) => {console.log(index.toString());return <Post key={index} post_id={index.toString()} hey="aaa"></Post>;})}
        </>
    );
}

export default Timeline;