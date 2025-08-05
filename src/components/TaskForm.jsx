import { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";

function TaskForm({ onCreate, onUpdate, editingTask }) {
  const titleRef = useRef();

  const [task, setTask] = useState({
    title: "",
    description: "",
    dueDate: "",
  });

  useEffect(() => {
    if (editingTask && titleRef.current) {
      titleRef.current.focus();
      setTask(editingTask);
    } else {
      setTask({ title: "", description: "", dueDate: "" });
    }
  }, [editingTask]);

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = () => {
    setTask({ ...task, completed: !task.completed });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!task.title || !task.description || !task.dueDate) {
      toast.error("All Fields are required");
      return;
    }
    if (editingTask) {
      onUpdate(task);
      toast.success("Task Updated successfully");
    } else {
      onCreate({ ...task, completed: false });
      toast.success("Task Created successfully");
    }
    setTask({ title: "", description: "", dueDate: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{editingTask ? "Edit Task" : "Add New Task"}</h2>
      <input
        type="text"
        name="title"
        ref={titleRef}
        placeholder="Title"
        value={task.title}
        onChange={handleChange}
      />
      <br />
      <textarea
        name="description"
        placeholder="Description"
        value={task.description}
        onChange={handleChange}
      />
      <br />
      <input
        type="date"
        name="dueDate"
        value={task.dueDate?.slice(0, 10)}
        onChange={handleChange}
      />
      {editingTask && (
        <div className="checkBoxWrapper">
          <label htmlFor="completed" className="checkBoxLabel">Completed:</label>
            <input
              type="checkbox"
              id="completed"
              name="completed"
              className="customCheckBox"
              checked={task.completed}
              onChange={handleCheckboxChange}
            />
        </div>
      )}

      <button type="submit">{editingTask ? "Update" : "Add"} Task</button>
    </form>
  );
}

export default TaskForm;
