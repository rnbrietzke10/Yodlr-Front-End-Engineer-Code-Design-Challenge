import React from 'react';
import UserList from '../../components/UserList/UserList';

const AdminPage = () => {
  return (
    <div className='container m-4'>
      <h2 className='fw-bolder'>Admin Dashboard</h2>

      <UserList />
    </div>
  );
};

export default AdminPage;
