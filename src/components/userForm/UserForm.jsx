import React, { useState } from "react";
import "./UserForm.css";

const UserForm = ({ addUser }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form inputs
    if (!name || !email || !phone) {
      alert("Please fill in all fields");
      return;
    }

    // Add new user
    const newUser = {
      name,
      email,
      phone,
    };
    addUser(newUser);

    // Reset form inputs
    setName("");
    setEmail("");
    setPhone("");
  };

  return (
    <form className="user-form" onSubmit={handleSubmit}>
      <h2>Add User</h2>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter Your Name"
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter Your Email"
        />
      </label>
      <label>
        Phone:
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Enter your Phone.No"
        />
      </label>
      <button type="submit">Add User</button>
    </form>
  );
};

export default UserForm;
