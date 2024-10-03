import React, { useRef, useEffect } from 'react';
import './Task.scss';

interface TaskProps {
  task: { id: number; text: string; completed: boolean };
  removeTask: (id: number) => void;
  toggleTaskCompletion: (id: number) => void;
  startEditing: (id: number, text: string) => void;
  isEditing: boolean;
  editingText: string;
  setEditingText: (text: string) => void;
  saveEdit: () => void;
  cancelEdit: () => void;
}

export function Task({
  task,
  removeTask,
  toggleTaskCompletion,
  startEditing,
  isEditing,
  editingText,
  setEditingText,
  saveEdit,
  cancelEdit,
}: TaskProps) {
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isEditing]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      saveEdit();
    } else if (e.key === 'Escape') {
      cancelEdit();
    }
  };

  return (
    <div className="task-item">
      {isEditing ? (
        <div className="edit-task">
          <span className='edit-description'>edit</span>
          <input
            ref={inputRef}
            type="text"
            value={editingText}
            onChange={(e) => setEditingText(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button className='taskBtn' onClick={saveEdit}>+</button>
          <button className='taskBtn' onClick={cancelEdit}>-</button>
        </div>
      ) : (
        <div className={`view-task ${task.completed ? 'completed' : ''}`}>
          <input id='taskCheckbox'
            className='taskCheckbox'
            type="checkbox"
            checked={task.completed}
            onChange={() => toggleTaskCompletion(task.id)}
          />
          <span className='taskText' onClick={() => startEditing(task.id, task.text)}>
            {task.text}
          </span>
          <button onClick={() => removeTask(task.id)}>Del</button>
        </div>
      )}
    </div>
  );
}
