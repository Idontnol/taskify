// components/TaskBoard.js
import React, { useContext, useEffect, useState } from "react";
import Column from "../Column";
import { FaPlus } from "react-icons/fa6";
import './index.css';
import AddTask from "../AddTask";
// import { projects } from "../../utils/data";
import { taskContext } from "../../context/taskContext";
import AddProject from "../AddProject";

const TaskBoard = () => {
  

  const [modalType, setModalType] = useState(""); // 'create', 'edit', 'show'
  const [preferedStat,setPreferedStat]=useState("To Do");
  const [selectedTask, setSelectedTask] = useState({
    title: "",
    startDate: "2025-01-12",
    endDate:"2025-01-20",
    status: "toDo",
  });
  const statuses = ["To Do", "In Progress", "In Review", "Completed"];
  const [taskOpen,setTaskOpen]=useState(false);
  const [projectOpen,setProjectOpen]=useState(false);
  const openTaskModal = (type, task = null) => {
    setModalType(type);
    setSelectedTask(task);
    setTaskOpen(true);
  };

  const closeModal = () => {
    setTaskOpen(false);
    setSelectedTask(null);
    setModalType("");
  };

  const saveTask = (task) => {
    console.log("Task saved:", task); // Handle task saving logic
    closeModal();
  };
  const closeProject = () => {
    setProjectOpen(false);
  }

  const {activeProject,setActiveProject,allProjects}=useContext(taskContext);
//   const [cProjects,setCProjects]=useState(allProjects);
  useEffect(()=>{
    // setCProjects(allProjects);
    // console.log("rerendered");
    setActiveProject(activeProject);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[taskOpen])


  return (
    <div className="taskboard">
      <aside className="sidebar">
        <div className="sidebar-heading">
            <img className="" src="task-logo.png" alt="" />
            <h1>Task Boards</h1>
        </div>
        <ul className="project-list">
          {allProjects.map((project, index) => (
            <li key={index} onClick={()=>{setActiveProject(project)}} className={activeProject?.name===project.name?" active-project ":""}>{project.name}</li>
          ))}
          <button className="add-project" onClick={()=>setProjectOpen(true)}><FaPlus /> <p>Add new Project</p> </button>
        </ul>
      </aside>
      <main className="board">
        <h2 className="board-project-name">{activeProject?.name|| "My Projects"}</h2>
        <hr className="custom-rule" />
        <div className="columns">
          {statuses.map((status,index) => (
            <>
                <Column key={status} status={status} setTaskOpen={setTaskOpen} closeModal={closeModal} setPreferedStat={setPreferedStat} setModalType={setModalType} />
                {index < statuses.length - 1 && <div className="vertical-divider"></div>}
            </>
            
          ))}
        </div>
      </main>
      {taskOpen && (
        <AddTask
          type={modalType}
          task={selectedTask}
          onClose={closeModal}
          onSave={saveTask}
          stat={preferedStat}
        />
      )}
       {projectOpen && (
        <AddProject
          onClose={closeProject}
       
        />
      )}
    </div>
  );
};

export default TaskBoard;
