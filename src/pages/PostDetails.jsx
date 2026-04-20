import React, { useEffect } from 'react';
import useAuth from '../hooks/useAuth';
import { useParams } from 'react-router-dom';

const PostDetails = () => {
    const {posts} = useAuth();
    const {id} = useParams();
    const post = posts.find(p => p.id.toString() === id);
    
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);

    if (!post) return <p>Post not found</p>;

    return (
        <div className="max-w-3xl mx-auto mt-6">
            <h1 className="text-3xl font-bold">{post.title}</h1>

            <p className="text-sm text-gray-500 mt-2">
                By {post.userName || "Guest"}
            </p>

            <p className="mt-4 text-gray-700 leading-relaxed whitespace-pre-line">
                {post.body}
            </p>
        </div>
    );
};

export default PostDetails;