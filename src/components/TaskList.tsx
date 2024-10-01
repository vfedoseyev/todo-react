import './TaskList.css';
import { Task } from './Task';

interface TaskItem {
  id: number;
  text: string;
}

interface TaskListProps {
  tasks: TaskItem[];
  removeTask: (id: number) => void;
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
  startEditing,
  editingTaskId,
  editingText,
  setEditingText,
  saveEdit,
  cancelEdit,
}: TaskListProps) {
  return (
    <div className="task-list">
      {tasks.map((task: TaskItem) => (
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
