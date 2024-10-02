import { useState } from 'react';
import './TaskInput.css';

interface TaskInputProps {
  addTask: (task: string) => void;
}

export function TaskInput({ addTask }: TaskInputProps) {
  const [task, setTask] = useState<string>('');

  const handleSubmit = () => {
    if (task.trim()) {
      addTask(task);
      setTask('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSubmit();
    } else if (e.key === 'Escape') {
      setTask('');
    }
  };

  return (
    <div className="task-input">
      <input
        type="text"
        placeholder="Введите текст задачи"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleSubmit}>Add</button>
    </div>
  );
}
