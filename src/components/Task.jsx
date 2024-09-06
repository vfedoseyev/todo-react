import './Task.css';
import cancelIcon from '../assets/cancelIcon.png';
import multiplyIcon from '../assets/multiply.png';
import checkedIcon from '../assets/checked.png';


export function Task({ task, removeTask, startEditing, isEditing, editingText, setEditingText, saveEdit, cancelEdit }) {
  return (
    <div className="task-item">
      {isEditing ? (
        <div className="edit-task">
          <input
            type="text"
            value={editingText}
            onChange={(e) => setEditingText(e.target.value)}
          />
          <button onClick={saveEdit}><img src={checkedIcon} alt=''/></button>
          <button onClick={cancelEdit}><img src={cancelIcon} alt=''/></button>
        </div>
      ) : (
        <div className="view-task">
          <span onClick={() => startEditing(task.id, task.text)}>
            {task.text}
          </span>
          <button onClick={() => removeTask(task.id)}><img src={multiplyIcon} alt=''/></button>
        </div>
      )}
    </div>
  );
}
