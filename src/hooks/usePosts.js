import { useEffect, useState } from "react";
import { fetchPosts } from "../services/postService";

const usePosts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem("posts");
    if(stored){
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setPosts(JSON.parse(stored));
      setLoading(false);
    } else{
      const getPosts = async () => {
        const data = await fetchPosts();
        setPosts(data);
        setLoading(false);
      };
      getPosts();
    }
  }, []);

  // save to localstorage
  useEffect(() => {
    if (posts.length > 0) {
      localStorage.setItem("posts", JSON.stringify(posts));
    }
  }, [posts]);

  return { posts, setPosts, loading };
};

export default usePosts;