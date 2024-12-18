import React, { useContext } from "react";
import TaskCard from "../TaskCard";
import './index.css';
import { taskContext } from "../../context/taskContext";
// import TaskCard from "../TaskCard";

const AllTasks = () => {
  const handleEdit = (taskId) => {
    alert(`Edit Task ID: ${taskId}`);
  };

  const handleDelete = (taskId) => {
    alert(`Delete Task ID: ${taskId}`);
  };
  const {currentTasks}=useContext(taskContext);

  return (
    <div className="all-tasks">
      <h1 className="title">All Tasks</h1>
      <div className="task-grid">
        {currentTasks.map((task) => (
          <TaskCard
            key={task.id}
            title={task.title}
            description={task.description}
            detailedInfo={task.detailedInfo} 
            task={task}
            onEdit={() => handleEdit(task.id)}
            onDelete={() => handleDelete(task.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default AllTasks;
