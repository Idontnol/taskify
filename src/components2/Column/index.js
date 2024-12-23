// components/Column.js
import React, { useContext, useEffect, useState } from "react";
import TaskComponent from "../TaskComponent";
import { FaPlus } from "react-icons/fa6";
import './index.css';
import { taskContext } from "../../context/taskContext";
import { statusConverter } from "../../utils/data";

const Column = ({ status,setTaskOpen,setModalType,setPreferedStat, closeModal }) => {
//   const [tasks, setTasks] = useState([
//     status === "To Do" ? { title: "Create a To-Do App", startDate: "01/12/2023", deadline: "06/12/2023" } : null,
//   ]);
  const statusTemp=statusConverter(status);
  const {activeProject,setAllProjects,allProjects}=useContext(taskContext);
  const [tasks, setTasks] = useState(activeProject?.details[statusTemp]|| null);
  console.log(tasks,"tassk hereeeeeeeeeeeeeeee")
  console.log(activeProject,activeProject?.details[statusTemp],"testing",statusTemp);
  const getStatusBackgroundColor = (status) => {
    switch (status) {
      case "To Do":
        return "#EBEEFC"; 
      case "In Progress":
        return "#FDF2FA"; 
      case "In Review":
        return  "#EFF8FF";
      case "Completed":
        return "#E7F8E9"; // Green
      default:
        return "#333"; // Default color (black/gray)
    }
  };
  const getStatusColor = (status) => {
    switch (status) {
      case "To Do":
        return "#3659E2"; 
      case "In Progress":
        return "#EE46BC"; 
      case "In Review":
        return  "#3FA1E3";
      case "Completed":
        return "#12BB23"; // Green
      default:
        return "#333"; // Default color (black/gray)
    }
  };

  useEffect(()=>{
     setTasks(activeProject?.details[statusTemp]);
     console.log(allProjects,closeModal,"nowwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww");
     // eslint-disable-next-line react-hooks/exhaustive-deps
  },[activeProject,setAllProjects,allProjects,closeModal])

  return (
    <div className={`column ${status.toLowerCase().replace(" ", "-")}`}>
      <button className="task-status-header"   style={{
          backgroundColor: getStatusBackgroundColor(status),
          color: getStatusColor(status)
        }}>  <span
        className="status-circle"
        style={{
          backgroundColor: getStatusColor(status),
        }}
      ></span>{status}
      </button>
      <div className="tasks">
        {tasks &&
          tasks.map(
            (task, index) =>
              task && <TaskComponent key={index} title={task.title} startDate={task.startDate} deadline={task.endDate} />
          )}
        <button className="add-new-taskbtn"
        onClick={()=>{setTaskOpen(true);setModalType("create");setPreferedStat(statusTemp)}}
        style={{
          backgroundColor: getStatusBackgroundColor(status),
          color: getStatusColor(status),borderRadius:"7px"
        }}><FaPlus /> <p>Add new</p> </button>
      </div>

    </div>
  );
};

export default Column;
