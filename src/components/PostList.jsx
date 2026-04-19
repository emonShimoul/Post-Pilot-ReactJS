import Post from './Post';

const PostList = ({posts, onDelete, onEdit}) => {
    if(posts.length === 0){
        return <p>No posts available...</p>;
    }
    
    return (
        <div className='space-y-3'>
            {posts.map(post => (
               <Post key={post.id} post={post} onDelete={onDelete} onEdit={onEdit} />
            ))}
        </div>
    );
};

export default PostList;