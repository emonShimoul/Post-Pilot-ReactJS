import React from 'react';
import usePosts from '../hooks/usePosts';
import PostForm from '../components/PostForm';
import PostList from '../components/PostList';

const Posts = () => {
    const {posts, setPosts, loading} = usePosts();

    const handleAddPost = (newPost) => {
        setPosts(prev => [newPost, ...prev]);
    };

    const handleDelete = (id) => {
        setPosts(prev => prev.filter(post => post.id !== id));
    }

    if (loading) return <p>Loading...</p>;

    return (
        <div>
            <PostForm onAddPost={handleAddPost} />
            <PostList posts={posts} onDelete={handleDelete} />
        </div>
    );
};

export default Posts;