
import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { getCurrentUser, logoutUser } from '../utils/auth';
import { useNavigate } from 'react-router-dom';
import usePosts from '../hooks/usePosts';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';

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
    
    const handleLogOut = () => {
        logoutUser();
        setUser(null);
        navigate("/login");
    }

    const handleAddPost = (newPost) => {
        setPosts(prev => [newPost, ...prev]);
        toast.success("Post added successfully!");
    };

    const handleUpdatePost = (updatedPost) => {
        console.log(updatedPost);
        
        setPosts(prev =>
            prev.map(post =>
            post.id === updatedPost.id ? updatedPost : post
            )
        );
        toast.success("Post updated successfully!");
    };

    const handleEdit = (post) => {
        setEditingPost(post);
    }

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "This can't be undone",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Delete",
            cancelButtonText: "Cancel",

            // 👇 FIX HERE
            customClass: {
                confirmButton: "bg-red-500 text-white px-4 py-2 rounded",
                cancelButton: "bg-gray-300 text-black px-4 py-2 rounded ml-2"
            },

            buttonsStyling: false
        }).then((result) => {
            if (result.isConfirmed) {
            setPosts(prev => prev.filter(post => post.id !== id));
            toast.success("Deleted!");
            }
        });
    };

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