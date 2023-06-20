import React, { useState } from 'react';
import UserForm from './components/userForm/UserForm';
import UserList from './components/userList/UserList';
import EditUserModal from './components/editUser/EditUser';
import './App.css';

const App = () => {
  const [users, setUsers] = useState([]);
  const [editUser, setEditUser] = useState(null);

  const addUser = (user) => {
    // Generate a unique ID for the new user
    const newUser = { ...user, id: Date.now() };

    setUsers([...users, newUser]);
  };

  const deleteUser = (userId) => {
    setUsers(users.filter((user) => user.id !== userId));
  };

  const updateUser = (updatedUser) => {
    setUsers(users.map((user) => (user.id === updatedUser.id ? updatedUser : user)));
  };

  const openEditModal = (user) => {
    setEditUser(user);
  };

  const closeEditModal = () => {
    setEditUser(null);
  };

  return (
    <div className="app">
      <UserForm addUser={addUser} />
      <UserList users={users} deleteUser={deleteUser} editUser={openEditModal} />
      {editUser && (
        <EditUserModal user={editUser} updateUser={updateUser} closeModal={closeEditModal} />
      )}
    </div>
  );
};

export default App;
