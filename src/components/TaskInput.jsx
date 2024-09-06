import { useState } from 'react';
import './TaskInput.css';
import addIcon from '../assets/plus.png';


export function TaskInput({ addTask }) {
  const [task, setTask] = useState('');

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
      <button onClick={handleSubmit}><img src={addIcon} alt="" /></button>
    </div>
  );
}
