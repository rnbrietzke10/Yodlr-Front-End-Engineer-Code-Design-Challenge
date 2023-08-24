import React, { useEffect, useState } from 'react';
import Api from '../../ApiHelper';
import UserCard from '../UserCard/UserCard';

const UserList = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const getUsers = async () => {
      const res = await Api.getUsers();
      console.log(res);
      setUsers(res);
    };
    getUsers();
  }, []);
  return (
    <div className='container p-3 bg-secondary mt-4 w-100 rounded'>
      <h2 className='text-light'>Users</h2>
      <div className='container w-100 d-flex p-2 bd-highlight flex-wrap justify-content-center'>
        {users.map(user => (
          <UserCard user={user} key={user.id} />
        ))}
      </div>
    </div>
  );
};

export default UserList;
