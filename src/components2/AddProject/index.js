import React, { useState,useContext } from "react";
import './index.css';
import { v4 as uuidv4 } from "uuid";
import { taskContext } from "../../context/taskContext";

const AddProject = ({  onClose}) => {
  const [projectDetails, setProjectDetails] = useState({
    id: uuidv4(),
    name:"",
    details:{
        toDo:[],
        inProgress:[],
        inReview:[],
        completed:[]
    }
  });

  const {setAllProjects,allProjects}=useContext(taskContext);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProjectDetails((prevTask) => ({
      ...prevTask,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    setAllProjects((p)=>[...p,projectDetails]);
    console.log(allProjects,"allppppppppppp");
    onClose();
  };

  return (
    <div className="modal2">
      <div className="modal-content2">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        {(
          <form>
            <p className="taskc-header">{"Create Project"}</p>
            <hr className="custom-rule"/>
            <div className="record-format2">
              <label>Name of the Project</label>
              <input
                type="text"
                name="name"
                value={projectDetails.name}
                onChange={handleChange}
                placeholder="Text"
              />
            </div>
           
            <div className="controlBtns">
                <button className="cancelBtn" onClick={onClose}>
                    Cancel
                </button>
                <button type="button" className="addBtn" onClick={handleSubmit}>
                { "Add"}
                </button>
            </div>
           
          </form>
        )}
      </div>
    </div>
  );
};

export default AddProject;
