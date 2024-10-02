import React, { useRef, useEffect } from 'react';
import './Task.css';

interface TaskProps {
  task: { id: number; text: string };
  removeTask: (id: number) => void;
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
            onKeyDown={handleKeyDown} // Добавляем обработчик нажатия клавиш
          />
          <button className='taskBtn' onClick={saveEdit}>+</button>
          <button className='taskBtn' onClick={cancelEdit}>-</button>
        </div>
      ) : (
        <div className="view-task">
          <span className='taskText' onClick={() => startEditing(task.id, task.text)}>
            {task.text}
          </span>
          <button onClick={() => removeTask(task.id)}>Del</button>
        </div>
      )}
    </div>
  );
}
