"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import PostCard from "../../components/PostCard";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://arbazmurme.onrender.com/api/posts")
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching posts", error);
      });
  }, []);

  console.log(posts);
  return (
    <div>
      {posts.length > 0 ? (
        posts.map((post) => <PostCard key={post._id} post={post} />)
      ) : (
        <p>No posts available</p>
      )}
    </div>
  );
}
