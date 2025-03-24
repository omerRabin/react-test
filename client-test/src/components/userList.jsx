import React from 'react';

const UserList = ({ users }) => {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.title}</li>
      ))}
    </ul>
  );
};

export default UserList;
