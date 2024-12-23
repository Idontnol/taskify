import { useContext, useState } from "react";
import TaskCard from "../TaskCard";
import { taskContext } from "../../context/taskContext";
import TaskModal from "../TaskModal";

const CompletedTasks=()=>{
    
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
    const completedTasks=currentTasks.filter(task=>task.status === 'completed');
    return (
        <div className="all-tasks">
        <h1 className="title">All Tasks</h1>
        <div className="task-grid">
          {completedTasks.map((task) => (
            <TaskCard
           
            key={task.id || 0}
            title={task.title || "Untitled Task"}
            description={task.description || "No description available."}
            detailedInfo={task.detailedInfo || "No details."}
            status={task.status|| "pending"} 
            task={task || {}}
            dueDate={task.dueDate || "No due date"}
            onEdit={() => openModal("edit", task.id || -1)}
            onDelete={() => deleteTask(task.id || -1)}
            onShow={() => openModal("show", task.id || -1)}
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
    )
}
export default CompletedTasks;