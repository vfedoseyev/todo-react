import React, { useState } from 'react';
import './App.css';
import { TaskInput } from './components/TaskInput';
import { TaskList } from './components/TaskList';

interface Task {
  id: number;
  text: string;
}

export function App(): JSX.Element {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [editingTaskId, setEditingTaskId] = useState<number | null>(null);
  const [editingText, setEditingText] = useState<string>('');

  const addTask = (text: string): void => {
    setTasks([...tasks, { id: Date.now(), text }]);
  };

  const removeTask = (id: number): void => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const removeAllTasks = (): void => {
    setTasks([]);
  };

  const startEditing = (id: number, text: string): void => {
    setEditingTaskId(id);
    setEditingText(text);
  };

  const saveEdit = (): void => {
    setTasks(tasks.map((task) =>
      task.id === editingTaskId ? { ...task, text: editingText } : task
    ));
    setEditingTaskId(null);
    setEditingText('');
  };

  const cancelEdit = (): void => {
    setEditingTaskId(null);
    setEditingText('');
  };

  return (
    <div className="app">
      <h1>My To-Do List</h1>
      <TaskInput addTask={addTask} />
      <button className='removeAllTasks' onClick={removeAllTasks}>
        Удалить все
      </button>
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
