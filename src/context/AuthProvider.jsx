
import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { getCurrentUser, logoutUser } from '../utils/auth';
import { useNavigate } from 'react-router-dom';
import usePosts from '../hooks/usePosts';

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [authLoading, setAuthLoading] = useState(true);
    const {posts, setPosts, loading} = usePosts();
    const [editingPost, setEditingPost] = useState(null);
    const navigate = useNavigate();
    
    useEffect(() => {
        const storedUser = getCurrentUser();
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setUser(storedUser);
        setAuthLoading(false);
    }, []);
    
    console.log(posts);
    const handleLogOut = () => {
        logoutUser();
        setUser(null);
        navigate("/login");
    }

    const handleAddPost = (newPost) => {
        setPosts(prev => [newPost, ...prev]);
    };

    const handleUpdatePost = (updatedPost) => {
        console.log(updatedPost);
        
        setPosts(prev =>
            prev.map(post =>
            post.id === updatedPost.id ? updatedPost : post
            )
        );
    };

    const handleEdit = (post) => {
        setEditingPost(post);

        // 👇 scroll to form
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    const handleDelete = (id) => {
        if (confirm("Are you sure?")) {
            setPosts(prev => prev.filter(post => post.id !== id));
        }
    }

    const values = {
        user,
        posts,
        loading,
        authLoading,
        editingPost,
        setEditingPost,
        setUser, 
        handleLogOut,
        handleAddPost,
        handleUpdatePost,
        handleEdit,
        handleDelete
    }

    return (
        <AuthContext.Provider value={values}>
        {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;