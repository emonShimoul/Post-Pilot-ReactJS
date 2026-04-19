import React from 'react';

const Post = ({post, onDelete}) => {
    return (
        <div className="border p-3 rounded shadow">
            <h2 className="font-bold">{post.title}</h2>
            <p>{post.body}</p>

            <button
                onClick={() => onDelete(post.id)}
                className="text-red-500 mt-2"
            >
                Delete
            </button>
        </div>
    );
};

export default Post;