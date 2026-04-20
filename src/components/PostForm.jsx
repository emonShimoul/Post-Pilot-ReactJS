
import React, { useEffect, useState } from 'react';
import useAuth from '../hooks/useAuth';

const PostForm = ({onClose}) => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const {user, editingPost, setEditingPost, handleAddPost, handleUpdatePost} = useAuth();

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
            handleUpdatePost({...editingPost, title, body});
            setEditingPost(null);
        } else{
            const newPost = {
                id: Date.now() + Math.random(),
                title,
                body,
                userId: user.id,
                userName: user.name
            }
            handleAddPost(newPost);
        }
        setTitle("");
        setBody("");
        onClose();
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
                className="border p-3 w-full rounded min-h-[300px] resize-y focus:outline-none focus:ring-2"
                placeholder="Write your post content here..."
                value={body}
                onChange={e => setBody(e.target.value)}
            />

            <button 
                disabled={!title || !body} 
                className="me-4 px-4 py-2 rounded text-white bg-blue-500 font-semibold hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
                {editingPost ? "Update Post" : "Add Post"}
            </button>

            <button
                type='button'
                onClick={onClose}
                className='px-4 py-2 rounded border text-white font-semibold bg-red-500 hover:bg-red-600'
            >
                Cancel
            </button>
        </form>
    );
};

export default PostForm;