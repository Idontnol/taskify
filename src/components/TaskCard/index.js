import React from "react";
import { MdEdit, MdDelete, MdCheckCircle, MdPending } from "react-icons/md";
import './index.css'; // Ensure this CSS file is imported

const TaskCard = ({  title = "Untitled Task", 
    description = "No description available.", 
    dueDate = "No due date", 
    status = "pending", 
    onEdit, 
    onDelete, 
    onShow  }) => {
  return (
    <div className="task-card" onClick={onShow}> 
      <div className="card-header">
        <h3 className="task-title">{title}</h3>
        {status === "completed" ? (
          <MdCheckCircle className="status-icon completed" title="Completed" />
        ) : (
          <MdPending className="status-icon pending" title="Pending" />
        )}
      </div>
      <p className="task-description">{description}</p>
      <div className="card-footer">
        <span className="due-date">Due: {dueDate}</span>
        <div className="card-actions">
          <button className="edit-btn"  onClick={(event) => {
            event.stopPropagation(); // Prevent click from propagating to parent
            onEdit();
          }}>
            <MdEdit className="action-icon" /> Edit
          </button>
          <button className="delete-btn"  onClick={(event) => {
            event.stopPropagation(); // Prevent click from propagating to parent
            onDelete();
          }}>
            <MdDelete className="action-icon" /> Delete
          </button>
        </div>
      </div>

    </div>
  );
};

export default TaskCard;
