import React, { useState, useEffect } from "react";

function TodoApp() {

  // 1️⃣ Load data from localStorage when component mounts
  const [todos, setTodos] = useState(() => {
        const savedData = localStorage.getItem("todos");
    return savedData ? JSON.parse(savedData) : [];
  });

  const [task, setTask] = useState("");
  const [date, setDate] = useState("");

  // 2️⃣ Save data to localStorage whenever todos change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // 3️⃣ Add Task
  const addTask = () => {
    if (!task || !date) {
      alert("Please fill all fields");
      return;
    }

    const newTodo = {
      id: Date.now(),
      name: task,
      date: date,
    };

    setTodos([...todos, newTodo]);

    setTask("");
    setDate("");
  };

  // 4️⃣ Delete Task
  const deleteTask = (id) => {
    const updatedList = todos.filter((todo) => todo.id !== id);
    setTodos(updatedList);
  };

  return (
    <div style={{ padding: "30px" }}>
      <h2>To Do List</h2>

      <input
        type="text"
        placeholder="Enter Task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <button onClick={addTask}>Add</button>

      <hr />

      {todos.length === 0 ? (
        <p>No Tasks Available</p>
      ) : (
        todos.map((todo) => (
          <div key={todo.id}>
            {todo.name} - {todo.date}
            <button onClick={() => deleteTask(todo.id)}>Delete</button>
          </div>
        ))
      )}
    </div>
  );
}

export default TodoApp;
