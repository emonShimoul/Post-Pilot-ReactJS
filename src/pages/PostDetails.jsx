import React, { useEffect } from 'react';
import useAuth from '../hooks/useAuth';
import { useNavigate, useParams } from 'react-router-dom';

const PostDetails = () => {
    const {posts, user, handleDelete, handleEdit} = useAuth();
    const {id} = useParams();
    const post = posts.find(p => p.id.toString() === id);
    const navigate = useNavigate();
    
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);

    const handleEditClick = () => {
        handleEdit(post);     // set editingPost in context
        navigate("/posts");   // go to Posts page
    }

    if (!post) return <p>Post not found</p>;

    return (
        <div className="max-w-3xl mx-auto mt-6">
            <h1 className="text-3xl font-bold">{post.title}</h1>

            <div className="flex justify-between items-center mt-2">
            <p className="text-sm text-gray-500">
            By {post.userName || "Guest"}
            </p>

            {user && post.userId === user.id && (
            <div className="flex gap-4">
                <button onClick={handleEditClick} className="text-blue-500 hover:underline">
                Edit
                </button>

                <button
                onClick={() => handleDelete(post.id)}
                className="text-red-500 hover:underline"
                >
                Delete
                </button>
            </div>
            )}
        </div>

        <p className="mt-4 text-gray-700 leading-relaxed whitespace-pre-line">
            {post.body}
        </p>
        </div>
    );
};

export default PostDetails;