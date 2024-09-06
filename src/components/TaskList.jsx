import './TaskList.css';
import { Task } from './Task';

export function TaskList({ tasks, removeTask, startEditing, editingTaskId, editingText, setEditingText, saveEdit, cancelEdit }) {
  return (
    <div className="task-list">
      {tasks.map(task => (
        <Task
          key={task.id}
          task={task}
          removeTask={removeTask}
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
