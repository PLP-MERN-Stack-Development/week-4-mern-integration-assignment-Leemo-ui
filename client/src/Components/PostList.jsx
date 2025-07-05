import { useEffect, useState } from 'react';
import axios from 'axios';
import PostItem from './PostItem';

export default function PostList() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('/api/posts');
        setPosts(response.data);
      } catch (err) {
        console.error('Error fetching posts:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h1>Blog Posts</h1>
      {posts.map(post => (
        <PostItem key={post._id} post={post} />
      ))}
    </div>
  );
}