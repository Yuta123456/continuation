import Post from "./Post";

const Timeline: React.FC = () => {
    return(
        <>
            {[...Array(5)].map(() => <Post></Post>)}
        </>
    );
}

export default Timeline;