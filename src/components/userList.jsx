import React from 'react';

const UserList = ({ users = [] }) => {
  if (!users.length) return <p>No posts available.</p>;

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.title}</li> // Using a proper unique key
      ))}
    </ul>
  );
};

export default UserList;
