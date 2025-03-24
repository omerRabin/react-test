import React from 'react';
import { useState } from 'react';
import useFetchPosts from '../hooks/useFetchPosts';
import UserList from '../components/userList';

const Home = () => {
  const [name, setName] = useState();
  const [userId, setUserId] = useState(1);
  const data = useFetchPosts(userId);

  return (
    <div style={{ direction: 'rtl', textAlign: 'right' }}>
      <h1>דמו לבאגים בריאקט</h1>
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder='הכנס שם' />
      <button onClick={() => setUserId(userId + 1)}>שנה משתמש</button>
      <UserList users={data} />
    </div>
  );
};

export default Home;
