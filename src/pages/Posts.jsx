import React, { useState } from 'react';
import usePosts from '../hooks/usePosts';
import PostForm from '../components/PostForm';
import PostList from '../components/PostList';
import { Search } from 'lucide-react';

const Posts = () => {
    const {posts, setPosts, loading} = usePosts();
    console.log(posts);
    
    const [search, setSearch] = useState("");
    const [filterUser, setFilterUser] = useState();
    const [editingPost, setEditingPost] = useState(null);

    const handleAddPost = (newPost) => {
        setPosts(prev => [newPost, ...prev]);
    };

    const handleEdit = (post) => {
        setEditingPost(post);
    }

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
        <div className='my-8 w-2/3 mx-auto'>
            <div className="relative mb-4">
                <Search className="absolute left-3 top-3 text-gray-400" size={18} />

                <input
                    type="text"
                    placeholder="Search posts..."
                    className="border pl-10 pr-3 py-2 w-full rounded"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>
            <select
                className="border p-2 mb-4 w-1/2"
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
            <PostForm 
                onAddPost={handleAddPost}
                editingPost={editingPost} 
                setEditingPost={setEditingPost}
            />
            <PostList posts={filteredPosts} onDelete={handleDelete} onEdit={handleEdit} />
        </div>
    );
};

export default Posts;