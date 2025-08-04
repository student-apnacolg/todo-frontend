function TaskItem({ task, onDelete, onEdit }) {
  return (
    <div className="task">
      <div className="taskDetails">
        <h3 className="taskTitle">{task.title}</h3>
        <p>{task.description}</p>
        <p>Due: {task.dueDate?.slice(0, 10)}</p>
        <p>Status: {task.completed ? "Done" : "Pending"}</p>
      </div>
      <div className="taskActions">
        <button onClick={() => onEdit(task)}>Edit</button>
        <button onClick={() => onDelete(task._id)}>Delete</button>
      </div>
    </div>
  );
}

export default TaskItem;
