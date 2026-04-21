import React, { useState } from 'react';
import PostForm from '../components/PostForm';
import PostList from '../components/PostList';
import { Search } from 'lucide-react';
import useAuth from '../hooks/useAuth';
import Pagination from '../components/Pagination';

const Posts = () => {
    const {user, posts, loading, handleEdit} = useAuth();
    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState("mine");
    const [showForm, setShowForm] = useState(false);
    // console.log(posts);
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 3;
    
    // filtered posts
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

    // Pagination
    const startIndex = (currentPage - 1) * postsPerPage;
    const paginatedPosts = filteredPosts.slice(
        startIndex,
        startIndex + postsPerPage
    );
    
    const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

    // for passing to Post.jsx to open the form modal after clicking edit post
    const handleEditClick = (post) => {
        handleEdit(post);        // from AuthProvider
        setShowForm(true);       // open modal
    };

    if (loading) return <p>Loading...</p>;

    return (
        <div className='mt-8 w-2/3 mx-auto'>
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
            
            <div className='flex justify-between'>
                <select
                    value={filter}
                    className="border p-2 mb-4 w-1/2"
                    onChange={(e) => setFilter(e.target.value)}
                >
                    <option value="all">All Posts</option>
                    <option value="mine">My Posts</option>
                </select>

                <button
                    onClick={() => setShowForm(true)}
                    className="bg-blue-500 text-white px-4 py-2 rounded mb-4 hover:bg-blue-600"
                    >
                    Add a Post
                </button>
            </div>

            {filteredPosts.length === 0 && (
                <p className="text-center text-gray-500">
                      No posts yet. Start by adding one!
                </p>
            )}
            
            {showForm && (
                <div className="fixed inset-0 bg-black/40 flex items-center justify-center px-4">
                    <div className="bg-white p-6 rounded-xl w-full max-w-3xl shadow-lg 
                  transform transition-all duration-300 scale-95 opacity-0 
                  animate-fadeIn">
                        <PostForm onClose={() => setShowForm(false)} />
                    </div>
                </div>
            )}
            
            <p className="text-sm text-gray-500 mb-4">
            Showing: {filter === "mine" ? "My Posts" : "All Posts"}
            </p>
            <PostList 
                posts={paginatedPosts}
                onEdit={handleEditClick}
            />
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                setCurrentPage={setCurrentPage}
            />
        </div>
    );
};

export default Posts;