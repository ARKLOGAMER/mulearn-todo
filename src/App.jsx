import React, { useState } from 'react';
import './App.css';

// Main App component - handles the todo list state and logic
function App() {
  // State for our todo items - using descriptive names like a real dev would
  const [todoItems, setTodoItems] = useState([]);
  const [newTaskInput, setNewTaskInput] = useState('');

  // Function to add a new task to our list
  const handleAddNewTask = () => {
    // Don't add empty tasks - basic validation
    if (newTaskInput.trim() === '') return;
    
    // Create the new task object with a unique ID
    const freshTask = {
      id: Date.now(), // Simple way to get unique IDs
      text: newTaskInput.trim(),
      isCompleted: false,
      createdAt: new Date().toLocaleString() // Track when task was created
    };

    // Update state with the new task
    setTodoItems(prevItems => [...prevItems, freshTask]);
    
    // Clear the input field after adding
    setNewTaskInput('');
  };

  // Toggle completion status of a task
  const toggleTaskCompletion = (taskId) => {
    setTodoItems(prevItems => 
      prevItems.map(item => 
        item.id === taskId 
          ? { ...item, isCompleted: !item.isCompleted }
          : item
      )
    );
  };

  // Remove a task from the list
  const removeTaskFromList = (taskId) => {
    setTodoItems(prevItems => 
      prevItems.filter(item => item.id !== taskId)
    );
  };

  // Handle Enter key press in input field
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleAddNewTask();
    }
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>My Task Manager</h1>
        <p>Keep track of your daily tasks</p>
      </header>

      <main className="main-content">
        {/* Input section for adding new tasks */}
        <div className="add-task-section">
          <input
            type="text"
            value={newTaskInput}
            onChange={(e) => setNewTaskInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="What do you need to do?"
            className="task-input-field"
          />
          <button 
            onClick={handleAddNewTask}
            className="add-task-button"
          >
            Add Task
          </button>
        </div>

        {/* Display the list of tasks */}
        <div className="tasks-list-container">
          {todoItems.length === 0 ? (
            <p className="no-tasks-message">No tasks yet. Add one above!</p>
          ) : (
            <ul className="tasks-list">
              {todoItems.map((task) => (
                <li 
                  key={task.id} 
                  className={`task-item ${task.isCompleted ? 'completed' : ''}`}
                >
                  {/* Checkbox for completion status */}
                  <input
                    type="checkbox"
                    checked={task.isCompleted}
                    onChange={() => toggleTaskCompletion(task.id)}
                    className="task-checkbox"
                  />
                  
                  {/* Task text with completion styling */}
                  <span className="task-text">
                    {task.text}
                  </span>
                  
                  {/* Delete button */}
                  <button
                    onClick={() => removeTaskFromList(task.id)}
                    className="delete-task-btn"
                    title="Delete this task"
                  >
                    ×
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Summary section */}
        {todoItems.length > 0 && (
          <div className="tasks-summary">
            <p>
              Total tasks: {todoItems.length} | 
              Completed: {todoItems.filter(task => task.isCompleted).length} | 
              Pending: {todoItems.filter(task => !task.isCompleted).length}
            </p>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
