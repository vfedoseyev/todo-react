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
  return (
    <div className="task-item">
      {isEditing ? (
        <div className="edit-task">
          <input
            type="text"
            value={editingText}
            onChange={(e) => setEditingText(e.target.value)}
          />
          <button onClick={saveEdit}></button>
          <button onClick={cancelEdit}></button>
        </div>
      ) : (
        <div className="view-task">
          <span onClick={() => startEditing(task.id, task.text)}>
            {task.text}
          </span>
          <button onClick={() => removeTask(task.id)}></button>
        </div>
      )}
    </div>
  );
}
