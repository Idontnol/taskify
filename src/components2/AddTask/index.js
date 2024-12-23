import React, { useState, useEffect, useContext } from "react";
import './index.css';
import { taskContext } from "../../context/taskContext";

const AddTask = ({ type, task, onClose, onSave, stat}) => {
  const [taskDetails, setTaskDetails] = useState({
    title: "",
    startDate: "",
    endDate:"",
    status: stat || "toDo",
  });
  const {activeProject,allProjects,setAllProjects}=useContext(taskContext);

  console.log(stat,"sattttt")

  useEffect(() => {
    if (task && type === "edit") {
      setTaskDetails(task);
    }
  }, [task, type]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTaskDetails((prevTask) => ({
      ...prevTask,
      [name]: value,
    }));
  };
  const handleSubmit = () => {
    // Create a new task object
    const updatedTask = { ...taskDetails };
  console.log(updatedTask,"updatedtasksssssssssssssssssss");
    // Update the allProjects state immutably
    setAllProjects((prevProjects) =>
        prevProjects.map((project) => {
          if (project.id === activeProject.id) {
            const updatedDetails = {
              ...project.details,
              [taskDetails.status]: [
                ...(project.details[taskDetails.status] || []),
                updatedTask,
              ],
            };
            console.log("successsssssssssssssssssssssssssssss",updatedDetails,"tttttttttttttttttt");
    
            return {
              ...project,
              details: updatedDetails,
            };
          }
          return project;
        })
      );
    console.log(allProjects,"testtttttttttttttt",updatedTask);
  
    // Close the modal or reset form as necessary
    onClose();
  };
  

  return (
    <div className="modal2">
      <div className="modal-content2">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        {type === "show" && (
          <div className="show-task">
            <h2>Task Details</h2>
            <div className="record-format2">
              <label>Title:</label>
              <p>{taskDetails.title}</p>
            </div>
            <div className="record-format2">
              <label>Description:</label>
              <p>{taskDetails.description}</p>
            </div>
            <div className="record-format2">
              <label>Start Date:</label>
              <p>{taskDetails.startDate}</p>
            </div>
            <div className="record-format2">
              <label>End Date:</label>
              <p>{taskDetails.endDate}</p>
            </div>
            <div className="record-format2">
              <label>Status:</label>
              <p>{taskDetails.status}</p>
            </div>
          </div>
        )}
        {(type === "edit" || type === "create") && (
          <form>
            <p className="taskc-header">{type === "create"?"Add new Task":"Edit Task"}</p>
            <hr className="custom-rule"/>
            <div className="record-format2">
              <label>Name of the Task</label>
              <input
                type="text"
                name="title"
                value={taskDetails.title}
                onChange={handleChange}
                placeholder="Text"
              />
            </div>
            <div className="addtask-dates">
                <div className="">
                    <label>Start Date:</label>
                <input
                    name="startDate"
                    type="date"
                    value={taskDetails.startDate || ""}
                    onChange={handleChange}
                />
                </div>
             
                <div className="">
                    <label>End Date:</label>
                    <input
                        name="endDate"
                        type="date"
                        value={taskDetails.endDate || ""}
                        onChange={handleChange}
                    />
                </div>
            </div>
            <div className="record-format2">
              <label>Status:</label>
              <select
                name="status"
                value={taskDetails.status}
                onChange={handleChange}
              >
                <option value="toDo">TO DO</option>
                <option value="inProgress">In Progress</option>
                <option value="inReview">In Review</option>
                <option value="completed">Completed</option>
              </select>
            </div>
            <div className="controlBtns">
                <button className="cancelBtn" onClick={onClose}>
                    Cancel
                </button>
                <button type="button" className="addBtn" onClick={handleSubmit}>
                {type === "edit" ? "Save Changes" : "Add"}
                </button>
            </div>
           
          </form>
        )}
      </div>
    </div>
  );
};

export default AddTask;
