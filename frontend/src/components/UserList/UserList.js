import React, { useEffect, useState } from 'react';
import Api from '../../ApiHelper';
import UserCard from '../UserCard/UserCard';
import SearchBox from '../SearchBox/SearchBox';

import './UserList.scss';

const UserList = () => {
  const [searchField, setSearchField] = useState('');
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState(users);
  useEffect(() => {
    const getUsers = async () => {
      const res = await Api.getUsers();
      console.log(res);
      setUsers(res);
    };
    getUsers();
  }, []);

  useEffect(() => {
    const newfilteredUsers = users.filter(user => {
      return user.firstName.toLowerCase().includes(searchField);
    });
    setFilteredUsers(newfilteredUsers);
  }, [users, searchField]);

  const onSearchChange = event => {
    const searchFieldString = event.target.value.toLowerCase();

    setSearchField(searchFieldString);
  };

  return (
    <div className='container p-3 bg-secondary mt-4 w-100 rounded'>
      <div className='UserList-header'>
        <h2 className='text-light'>Users</h2>
        <SearchBox
          onChangeHandler={onSearchChange}
          placeholder='Search Users'
        />
      </div>
      <div className='container w-100 d-flex p-2 bd-highlight flex-wrap justify-content-center'>
        {filteredUsers.map(user => (
          <UserCard user={user} key={user.id} />
        ))}
      </div>
    </div>
  );
};

export default UserList;
