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

  return (
    <div className="task-input">
      <input
        type="text"
        placeholder="Введите текст задачи"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={handleSubmit}></button>
    </div>
  );
}
