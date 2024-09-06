import { useState } from 'react';
import './App.css';
import { TaskInput } from './components/TaskInput';
import { TaskList } from './components/TaskList';
import garbageIcon from './assets/garbage.png'

export function App() {
  const [tasks, setTasks] = useState([]);
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [editingText, setEditingText] = useState('');

  const addTask = (text) => {
    setTasks([...tasks, { id: Date.now(), text }]);
  };

  const removeTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const removeAllTasks = () => {
    setTasks([]); // Очищаем список задач
  };

  const startEditing = (id, text) => {
    setEditingTaskId(id);
    setEditingText(text);
  };

  const saveEdit = () => {
    setTasks(tasks.map(task =>
      task.id === editingTaskId ? { ...task, text: editingText } : task
    ));
    setEditingTaskId(null);
    setEditingText('');
  };

  const cancelEdit = () => {
    setEditingTaskId(null);
    setEditingText('');
  };

  return (
    <div className="app">
      <h1>My To-Do List</h1>
        <TaskInput addTask={addTask} />
        <button onClick={removeAllTasks}><img src={garbageIcon} alt="" /></button>
      <TaskList
        tasks={tasks}
        removeTask={removeTask}
        startEditing={startEditing}
        editingTaskId={editingTaskId}
        editingText={editingText}
        setEditingText={setEditingText}
        saveEdit={saveEdit}
        cancelEdit={cancelEdit}
      />
    </div>
  );
}
