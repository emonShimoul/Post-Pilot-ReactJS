import React, { useState } from 'react';
import PostForm from '../components/PostForm';
import PostList from '../components/PostList';
import { Search } from 'lucide-react';
import useAuth from '../hooks/useAuth';

const Posts = () => {
    const {user, posts, loading} = useAuth();
    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState("mine");
    // console.log(posts);
    
    const filteredPosts = posts
        .filter(post => {
            if (filter === "mine") {
            return post.userId === user.id;
            }
            return true;
        })
        .filter(post =>
            post.title.toLowerCase().includes(search.toLowerCase())
        );

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
                value={filter}
                className="border p-2 mb-4 w-1/2"
                onChange={(e) => setFilter(e.target.value)}
            >
                <option value="all">All Posts</option>
                <option value="mine">My Posts</option>
            </select>
            {filteredPosts.length === 0 && (
                <p className="text-center text-gray-500">
                      No posts yet. Start by adding one!
                </p>
            )}
            <PostForm />
            <p className="text-sm text-gray-500 mb-4">
            Showing: {filter === "mine" ? "My Posts" : "All Posts"}
            </p>
            <PostList posts={filteredPosts} />
        </div>
    );
};

export default Posts;