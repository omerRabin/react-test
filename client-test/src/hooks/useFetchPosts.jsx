import { useEffect, useState } from 'react';

const useFetchPosts = (userId) => {
  const [data, setData] = useState();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
      .then((res) => {
        if (!res.ok) throw new Error('שגיאה בעת שליפת הנתונים'); // Handling bad status
        return res.json();
      })
      .then(setData)
      .catch(console.error);
  }, []);

  return data;
};

export default useFetchPosts;
