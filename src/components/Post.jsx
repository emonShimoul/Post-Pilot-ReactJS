import React from 'react';
import useAuth from '../hooks/useAuth';

const Post = ({post, onDelete, onEdit}) => {
    const {user} = useAuth();
    
    return (
        <div className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition">
            <h2 className="text-lg font-semibold text-gray-800">{post.title}</h2>
            <p className="text-gray-600 mt-2">{post.body}</p>

            <button
                onClick={() => onEdit(post)}
                className="text-blue-500 mr-3"
                >
                Edit
            </button>
            <button
                onClick={() => onDelete(post.id)}
                className="mt-3 text-sm text-red-500 hover:underline"
            >
                Delete
            </button>
            <p className="text-sm text-gray-500">
            By {user.name}
            </p>
        </div>
    );
};

export default Post;