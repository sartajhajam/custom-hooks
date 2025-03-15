// Import React and useState hooks from React.
import React, { useState, useEffect } from "react";
// Create a custom hook called useFetch.
export function useFetch() {
  const [posts, setPosts] = useState({});

  async function getPosts() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const json = await response.json();
    setPosts(json);
  }

  useEffect(() => {
    getPosts();
  }, []);
  return posts;
}
