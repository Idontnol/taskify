import React, { useContext, useState } from "react";
import TaskCard from "../TaskCard";
import './index.css';
import { taskContext } from "../../context/taskContext";
import TaskModal from "../TaskModal";
// import TaskCard from "../TaskCard";

const AllTasks = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState(""); // "edit", "create", or "show"
  const [selectedTaskId, setSelectedTaskId] = useState(null);
//   const handleEdit = (taskId) => {
//     alert(`Edit Task ID: ${taskId}`);
//   };

//   const handleDelete = (taskId) => {
//     alert(`Delete Task ID: ${taskId}`);
//   };
  const openModal = (type, taskId = -1) => {
    console.log("Opening modal with type:", type, "and taskId:", taskId);

    if (taskId !== -1 && !currentTasks.find((task) => task.id === taskId)) {
      console.error("Invalid task ID:", taskId);
      return;
    }
    setModalType(type);
    setSelectedTaskId(taskId);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const saveTask = (task) => {
    if (task.id === -1) {
      // Create a new task
      const newTask = {
        ...task,
        id: currentTasks.length > 0 ? currentTasks[currentTasks.length - 1].id + 1 : 1,
      };
      setCurrentTasks([...currentTasks, newTask]);
      console.log("New Task Created:", newTask);
    } else {
      // Update an existing task
      const updatedTasks = currentTasks.map((t) =>
        t.id === task.id ? { ...t, ...task } : t
      );
      setCurrentTasks(updatedTasks);
      console.log("Task Updated:", task);
    }
    closeModal();
  };
  
  const {currentTasks,setCurrentTasks}=useContext(taskContext);
  if (!Array.isArray(currentTasks)) {
    console.error("currentTasks is not an array:", currentTasks);
    return <div>No tasks available</div>;
  }

  const deleteTask=(id)=>{
    const updatedTasks=currentTasks.filter(task=>task.id !== id);
    setCurrentTasks(updatedTasks);
  }

  return (
    <div className="all-tasks">
      <h1 className="title">All Tasks</h1>
      <div className="task-grid">
        {currentTasks.map((task) => {
             if (!task || typeof task !== "object") {
                console.warn("Invalid task data:", task);
                return null; // Skip invalid tasks
              }
        //   <TaskCard
        //     key={task.id}
        //     title={task.title}
        //     description={task.description}
        //     detailedInfo={task.detailedInfo} 
        //     task={task}
        //     dueDate={task.dueDate}
        //     onEdit={() => openModal("edit", task.id)}
        //     onDelete={() => deleteTask(task.id)}
        //     onShow={() => openModal("show", task.id)}

        //   />
        return(          <TaskCard
          key={task.id || 0}
          title={task.title || "Untitled Task"}
          description={task.description || "No description available."}
          detailedInfo={task.detailedInfo || "No details."}
          task={task || {}}
          dueDate={task.dueDate || "No due date"}
          onEdit={() => openModal("edit", task.id || -1)}
          onDelete={() => deleteTask(task.id || -1)}
          onShow={() => openModal("show", task.id || -1)}
        />)
    })}
      </div>
      {isModalOpen && (
        <TaskModal
          type={modalType}
          id={selectedTaskId}
          onClose={closeModal}
          onSave={saveTask}
        />
      )}
    </div>
  );
};

export default AllTasks;
