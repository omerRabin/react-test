import { useEffect, useState } from 'react';

const useFetchPosts = (userId) => {
  const [data, setData] = useState();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
      .then((res) => res.json())
      .then(setData);
  }, []);

  return data;
};

export default useFetchPosts;
