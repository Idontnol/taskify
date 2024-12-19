import React, { useContext, useState } from "react";
import TaskCard from "../TaskCard";
import './index.css';
import { taskContext } from "../../context/taskContext";
import TaskModal from "../TaskModal";
import { IoMdAdd } from "react-icons/io";

const Hero= () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState(""); // "edit", "create", or "show"
  const [selectedTaskId, setSelectedTaskId] = useState(null);

  const openModal = (type, taskId = -1) => {
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

  const deleteTask=(id)=>{
    const updatedTasks=currentTasks.filter(task=>task.id !== id);
    setCurrentTasks(updatedTasks);
  }

  return (
    <div className="all-tasks">
      <div className="gap-navbar"></div>
      
      <div className="right-side">
        <div className="inner-btn">
            <button className="create-btn" onClick={() => openModal("create")}>Create Task</button>
            <IoMdAdd  />
        </div>
       
      </div>

      <div className="task-grid">
        {currentTasks.map((task) => (
          <TaskCard
            key={task.id}
            title={task.title}
            description={task.description}
            detailedInfo={task.detailedInfo} 
            task={task}
            dueDate={task.dueDate}
            onEdit={() => openModal("edit", task.id)}
            onDelete={() => deleteTask(task.id)}
            onShow={() => openModal("show", task.id)}

          />
        ))}
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

export default Hero;