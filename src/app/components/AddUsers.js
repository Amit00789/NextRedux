"use client";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/slice";

export default function AddUsers() {
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  const UserDispatch = () => {
    dispatch(addUser(name));
  };
  return (
    <div className="add-user">
      <h3>Add User</h3>
      <input
        type="text"
        placeholder="Add User Name"
        className="add-user-input"
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={UserDispatch} className="add-user-btn">
        Add User
      </button>
    </div>
  );
}
