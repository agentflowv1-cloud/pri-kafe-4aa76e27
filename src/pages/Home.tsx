import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

function Home() {
  const { data, error, isLoading } = useQuery(['home'], async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    return response.data;
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>Home</h1>
      <ul>
        {data.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Home;