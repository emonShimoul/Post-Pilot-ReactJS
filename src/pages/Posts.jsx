import React, { useState } from 'react';
import usePosts from '../hooks/usePosts';
import PostForm from '../components/PostForm';
import PostList from '../components/PostList';

const Posts = () => {
    const {posts, setPosts, loading} = usePosts();
    const [search, setSearch] = useState("");
    const [filterUser, setFilterUser] = useState();

    const handleAddPost = (newPost) => {
        setPosts(prev => [newPost, ...prev]);
    };

    const handleDelete = (id) => {
        setPosts(prev => prev.filter(post => post.id !== id));
    }

    const filteredPosts = posts
        .filter(post =>
            post.title.toLowerCase().includes(search.toLowerCase())
        )
        .filter(post =>
            filterUser ? post.userId == filterUser : true
        )

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
            <select
                className="border p-2 mb-4"
                onChange={(e) => setFilterUser(e.target.value)}
                >
                <option value="">All</option>
                <option value="1">User 1</option>
                <option value="2">User 2</option>
            </select>
            {filteredPosts.length === 0 && (
                <p className="text-center text-gray-500">
                    No posts found
                </p>
            )}
            <PostForm onAddPost={handleAddPost} />
            <PostList posts={filteredPosts} onDelete={handleDelete} />
        </div>
    );
};

export default Posts;