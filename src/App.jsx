import { useEffect, useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { createTask, updateTask, deleteTask, getTasks } from "./api/tasks";

function App() {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);

  const loadTasks = async () => {
    const res = await getTasks();
    setTasks(res.data);
  };

  useEffect(() => {
    loadTasks();
  }, []);

  const handleCreate = async (task) => {
    await createTask(task);
    loadTasks();
  };

  const handleDelete = async (id) => {
    await deleteTask(id);
    loadTasks();
  };

  const handleUpdate = async (updatedTask) => {
    await updateTask(updatedTask._id, updatedTask);
    setEditingTask(null);
    loadTasks();
  };

  return (
    <div className="container">
      <h1 className="mainHeading">TO-DO List App</h1>
      <div className="grid">
        <div className="leftPanel">
          <TaskList
            tasks={tasks}
            onDelete={handleDelete}
            onEdit={setEditingTask}
          />
        </div>
        <div className="rightPanel">
          <TaskForm
            onCreate={handleCreate}
            onUpdate={handleUpdate}
            editingTask={editingTask}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
