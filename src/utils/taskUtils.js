// Step 2: JavaScript Operators and Functions
export const calculateCompletion = (completed, total) => {
  return total > 0 ? (completed / total) * 100 : 0;
};

export const isHighPriority = (task) => task.priority === 'High';

// Step 3: Conditional Statements and Loops
export function filterTasks(tasks, status) {
  const filtered = [];
  for (let task of tasks) {
    if (status === 'completed' && task.completed) filtered.push(task);
    else if (status === 'pending' && !task.completed) filtered.push(task);
  }
  return filtered;
}

// Step 4: Objects, Arrays, Sets, and Maps
export const task = {
  id: 1,
  title: "Finish JS project",
  completed: false,
  priority: "High"
};

export let tasks = [
  task,
  {
    id: 2,
    title: "Read React docs",
    completed: true,
    priority: "Medium"
  }
];

export const priorities = new Set(tasks.map(t => t.priority));
export const taskMap = new Map(tasks.map(t => [t.id, t.title]));

// Step 7: Promises and Async Handling
export const saveTask = (task) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Saved task:', task);
      resolve({ success: true });
    }, 1000);
  });
};

// Async/await example usage
export const saveTaskAsync = async (task) => {
  try {
    const result = await saveTask(task);
    return result;
  } catch (error) {
    console.error('Failed to save task:', error);
    return { success: false };
  }
};

// Additional utility functions that might be useful
export const getCompletedTasksCount = (tasks) => {
  return tasks.filter(task => task.completed).length;
};

export const getTasksByPriority = (tasks, priority) => {
  return tasks.filter(task => task.priority === priority);
};

export const sortTasksByPriority = (tasks) => {
  const priorityOrder = { High: 1, Medium: 2, Low: 3 };
  return [...tasks].sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]);
};