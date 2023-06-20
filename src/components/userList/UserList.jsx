import React from "react";
import "./UserList.css";

const UserList = ({ users, deleteUser, editUser }) => {
  return (
    <div className="user-list">
      <h2>User List</h2>
      {users.length === 0 ? (
        <p>No users available</p>
      ) : (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <div className="user-card">
                <div>
                  <strong>Name:</strong> {user.name}
                </div>
                <div>
                  <strong>Email:</strong> {user.email}
                </div>
                <div>
                  <strong>Phone:</strong> {user.phone}
                </div>
              </div>
              <div className="user-actions">
                <button onClick={() => editUser(user)}>Edit</button>
                <button className="del" onClick={() => deleteUser(user.id)}>Delete</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UserList;
