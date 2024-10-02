import React from 'react';
import { Task } from './Task';
import './TaskList.scss';

interface TaskListProps {
  tasks: { id: number; text: string; completed: boolean }[];
  removeTask: (id: number) => void;
  toggleTaskCompletion: (id: number) => void;
  startEditing: (id: number, text: string) => void;
  editingTaskId: number | null;
  editingText: string;
  setEditingText: (text: string) => void;
  saveEdit: () => void;
  cancelEdit: () => void;
}

export function TaskList({
  tasks,
  removeTask,
  toggleTaskCompletion,
  startEditing,
  editingTaskId,
  editingText,
  setEditingText,
  saveEdit,
  cancelEdit,
}: TaskListProps) {
  return (
    <div className="task-list">
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          removeTask={removeTask}
          toggleTaskCompletion={toggleTaskCompletion}
          startEditing={startEditing}
          isEditing={editingTaskId === task.id}
          editingText={editingText}
          setEditingText={setEditingText}
          saveEdit={saveEdit}
          cancelEdit={cancelEdit}
        />
      ))}
    </div>
  );
}
