import Post from './Post';

const PostList = ({posts, onEdit}) => {
    if(posts.length === 0){
        return <p>No posts available...</p>;
    }
    
    return (
        <div className='space-y-4'>
            {posts.map(post => (
               <Post key={post.id} post={post} onEdit={onEdit} />
            ))}
        </div>
    );
};

export default PostList;