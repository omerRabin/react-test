import { useEffect, useState } from 'react';

const useFetchPosts = (userId) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (!userId) return; // Prevent fetch if userId is undefined
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch');
        return res.json();
      })
      .then(setData)
      .catch(console.error);
  }, [userId]); // Ensured dependency is correctly used
  return data;
};

export default useFetchPosts;
