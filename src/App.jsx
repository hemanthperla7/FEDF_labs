import { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');

  const addTask = () => {
    if (input.trim() === '') return;
    setTasks([...tasks, { 
      id: Date.now(), 
      title: input, 
      completed: false 
    }]);
    setInput('');
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(t => 
      t.id === id ? { ...t, completed: !t.completed } : t
    ));
  };

  const deleteTask = (id, e) => {
    e.stopPropagation();
    setTasks(tasks.filter(t => t.id !== id));
  };

  const completedTasks = tasks.filter(task => task.completed).length;
  const totalTasks = tasks.length;

  return (
    <div className="App">
      <div className="container">
        <header className="header">
          <h1 className="title">🎓 Student Task Tracker</h1>
          <p className="subtitle">Manage your academic tasks efficiently</p>
        </header>

        <div className="stats-card">
          <div className="stat">
            <span className="stat-number">{totalTasks}</span>
            <span className="stat-label">Total Tasks</span>
          </div>
          <div className="stat">
            <span className="stat-number">{completedTasks}</span>
            <span className="stat-label">Completed</span>
          </div>
          <div className="stat">
            <span className="stat-number">
              {totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0}%
            </span>
            <span className="stat-label">Progress</span>
          </div>
        </div>

        <div className="input-section">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && addTask()}
            placeholder="Enter a new task..."
            className="task-input"
          />
          <button onClick={addTask} className="add-btn">
            <span>+ Add Task</span>
          </button>
        </div>

        {tasks.length > 0 ? (
          <div className="tasks-section">
            <h2 className="tasks-title">Your Tasks ({tasks.length})</h2>
            <ul className="tasks-list">
              {tasks.map(task => (
                <li 
                  key={task.id} 
                  onClick={() => toggleTask(task.id)}
                  className={`task-item ${task.completed ? 'completed' : ''}`}
                >
                  <div className="task-content">
                    <span className="checkbox">
                      {task.completed ? '✓' : ''}
                    </span>
                    <span className="task-text">{task.title}</span>
                  </div>
                  <button 
                    onClick={(e) => deleteTask(task.id, e)}
                    className="delete-btn"
                  >
                    ×
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div className="empty-state">
            <div className="empty-icon">📝</div>
            <h3>No tasks yet</h3>
            <p>Add your first task to get started!</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;