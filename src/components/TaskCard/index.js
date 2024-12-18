import React from "react";
import { MdEdit, MdDelete, MdCheckCircle, MdPending } from "react-icons/md";
import './index.css'; // Ensure this CSS file is imported

const TaskCard = ({ title, description, dueDate, status, onEdit, onDelete }) => {
  return (
    <div className="task-card">
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
          <button className="edit-btn" onClick={onEdit}>
            <MdEdit className="action-icon" /> Edit
          </button>
          <button className="delete-btn" onClick={onDelete}>
            <MdDelete className="action-icon" /> Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
