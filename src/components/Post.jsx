import React from 'react';
import useAuth from '../hooks/useAuth';

// {onDelete, onEdit}

const Post = ({post}) => {
    const {user, handleDelete, handleEdit} = useAuth();
    
    return (
        <div className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition">
            <div className='flex justify-between'>
                <div>
                    <h2 className="text-lg font-semibold text-gray-800">{post.title}</h2>
                    <p className="text-gray-600 mt-2">{post.body}</p>
                </div>

                {user && post.userId === user.id && (
                <div>
                    <button
                        onClick={() => handleEdit(post)}
                        className="text-blue-500 mr-3"
                        >
                        Edit
                    </button>
                    <button
                        onClick={() => handleDelete(post.id)}
                        className="text-sm text-red-500 hover:underline"
                    >
                    Delete
                    </button>
                </div>
                )}
            </div>
            <p className="text-sm text-gray-500 mt-2">
                By {post.userName ? post.userName : "Guest User"}
            </p>
        </div>
    );
};

export default Post;