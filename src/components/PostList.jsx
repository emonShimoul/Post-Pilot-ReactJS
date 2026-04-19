import Post from './Post';

const PostList = ({posts, onDelete}) => {
    if(posts.length === 0){
        return <p>No posts available...</p>;
    }
    
    return (
        <div className='space-y-3'>
            {posts.map(post => (
               <Post key={post.id} post={post} onDelete={onDelete} />
            ))}
        </div>
    );
};

export default PostList;