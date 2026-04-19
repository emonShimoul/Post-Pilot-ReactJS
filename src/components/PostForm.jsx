
import React, { useEffect, useState } from 'react';

const PostForm = ({onAddPost, editingPost, setEditingPost}) => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    // prefill while editing
    useEffect(() => {
        if(editingPost){
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setTitle(editingPost.title);
            setBody(editingPost.body);
        }
    }, [editingPost]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!title || !body) return;

        if(editingPost){
            // update
            onAddPost({...editingPost, title, body});
            setEditingPost(null);
        } else{
            const newPost = {
                id: Date.now(),
                title,
                body
            }
            onAddPost(newPost);
        }

        

        setTitle("");
        setBody("");
    };

    return (
        <form onSubmit={handleSubmit} className="mb-6 bg-white p-4 rounded-xl shadow space-y-3">
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

            <button className='bg-blue-500 text-white px-4 py-2 rounded'>{editingPost ? "Update Post" : "Add Post"}</button>
        </form>
    );
};

export default PostForm;