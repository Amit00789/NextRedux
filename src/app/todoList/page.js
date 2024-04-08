"use client";
import { useSelector, useDispatch } from "react-redux";
import { deleteUser } from "../redux/slice";
import { useState } from "react";
import { addTask } from "../redux/todoSlice";

export default function todoList() {
  const [todo, setTodo] = useState("");
  const todoData = useSelector((data) => data.todoData.todos);
  const dispatch = useDispatch();

  const todoDispatch = () => {
    dispatch(addTask(todo));
  };
  return (
    <>
      <h3>To Do List</h3>
      <input
        type="text"
        value={todo}
        placeholder="Enter your tasks!!"
        onChange={(e) => setTodo(e.target.value)}
      />
      <button onClick={todoDispatch}>Add Task</button>
      {
        todoData.map((item)=> (
            <h4 key={item.id}>{item.name}</h4>
        ))
      }
    </>
  );
}
