import React, { useState } from 'react';
import './App.scss';
import { TaskInput } from './components/TaskInput';
import { TaskList } from './components/TaskList';

interface Task {
  id: number;
  text: string;
  completed: boolean; // Добавляем флаг для завершенной задачи
}

export function App(): JSX.Element {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [editingTaskId, setEditingTaskId] = useState<number | null>(null);
  const [editingText, setEditingText] = useState<string>('');
  const [showCompleted, setShowCompleted] = useState<boolean>(false);

  const addTask = (text: string): void => {
    setTasks([...tasks, { id: Date.now(), text, completed: false }]); // Добавляем completed: false
  };

  const removeTask = (id: number): void => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const removeAllTasks = (): void => {
    setTasks([]);
  };

  const toggleTaskCompletion = (id: number): void => {
    setTasks(tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
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

  const toggleShowCompleted = (): void => {
    setShowCompleted(!showCompleted);
  };

  const filteredTasks = showCompleted ? tasks.filter(task => task.completed) : tasks;

  return (
    <div className="app">
      <h1>My To-Do List</h1>
      <div className='addRemWrapper'>
        <TaskInput addTask={addTask} />
        <button className='removeAllTasks' onClick={removeAllTasks}>
          Удалить все
        </button>
      </div>
      <button onClick={toggleShowCompleted}>
        {showCompleted ? 'Показать все задачи' : 'Показать завершенные'}
      </button>
      <TaskList
        tasks={filteredTasks}
        removeTask={removeTask}
        toggleTaskCompletion={toggleTaskCompletion}
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
