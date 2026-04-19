import React, { useState } from 'react';
import usePosts from '../hooks/usePosts';
import PostForm from '../components/PostForm';
import PostList from '../components/PostList';

const Posts = () => {
    const {posts, setPosts, loading} = usePosts();
    const [search, setSearch] = useState("");

    const handleAddPost = (newPost) => {
        setPosts(prev => [newPost, ...prev]);
    };

    const handleDelete = (id) => {
        setPosts(prev => prev.filter(post => post.id !== id));
    }

    const filteredPosts = posts.filter(post =>
        post.title.toLowerCase().includes(search.toLowerCase())
    );

    if (loading) return <p>Loading...</p>;

    return (
        <div>
            <input
                type="text"
                placeholder='Search posts...'
                className='border p-2 w-full mb-4 rounded'
                values={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <PostForm onAddPost={handleAddPost} />
            <PostList posts={filteredPosts} onDelete={handleDelete} />
        </div>
    );
};

export default Posts;