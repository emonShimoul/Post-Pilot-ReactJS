
import React, { useState } from 'react';

const PostForm = ({onAddPost}) => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!title || !body) return;

        const newPost = {
            id: Date.now(),
            title,
            body
        }

        onAddPost(newPost);

        setTitle("");
        setBody("");
    };

    return (
        <form onSubmit={handleSubmit} className="mb-4 space-y-2">
            <input 
                className="border p-2 w-full"
                placeholder="Title"
                value={title}
                onChange={e => setTitle(e.target.value)}
            />
            <textarea
                className='border p-2 w-full'
                placeholder='Body'
                value={body}
                onChange={e => setBody(e.target.value)}
            />

            <button className='bg-blue-500 text-white px-4 py-2'>Add Post</button>
        </form>
    );
};

export default PostForm;