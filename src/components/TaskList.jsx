import TaskItem from '../components/TaskItem'

function TaskList({tasks , onDelete, onEdit}) {
  if (tasks.length === 0) return <p>No Tasks Found</p>
  return (
    <div className='taskList'>
      {tasks.map((task) => (
        <TaskItem key={task._id} task={task} onDelete={onDelete} onEdit={onEdit} />
      ))}
    </div>
  )
}

export default TaskList