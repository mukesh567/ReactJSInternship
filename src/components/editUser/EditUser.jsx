import React, { useState } from "react";
import "./EditUser.css";

const EditUserModal = ({ user, updateUser, closeModal }) => {
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [phone, setPhone] = useState(user.phone);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form inputs
    if (!name || !email || !phone) {
      alert("Please fill in all fields");
      return;
    }

    // Update user
    const updatedUser = {
      id: user.id,
      name,
      email,
      phone,
    };
    updateUser(updatedUser);
    closeModal();
  };

  return (
    <div className="edit-user-modal">
      <h2>Edit User</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          Phone:
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </label>
        <div className="modal-actions">
          <button type="submit">Save</button>
          <button onClick={closeModal}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default EditUserModal;
