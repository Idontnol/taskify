import React, { useState, useEffect, useContext } from 'react';
import './index.css';
import { taskContext } from '../../context/taskContext';

const TaskModal = ({ type, id, onClose, onSave }) => {
  const [task, setTask] = useState({
    id,
    title: '',
    description: '',
    dueDate: '',
    status: 'pending',
  });
  const {currentTasks}=useContext(taskContext);

  useEffect(() => {
    if (type === 'edit' || type === 'show') {

      const selectedTask = currentTasks.find((task) => task.id === id);
      if (selectedTask) setTask(selectedTask);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, type]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask((prevTask) => ({
      ...prevTask,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    onSave(task);
    onClose();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        {type === 'show' && (
          <div className='show-task'>
            <h2>Task Details</h2>
            <p><strong>Title:</strong> {task.title}</p>
            <p><strong>Description:</strong> {task.description}</p>
            <p><strong>Due Date:</strong> {task.dueDate}</p>
            <p><strong>Status:</strong> {task.status}</p>
          </div>
        )}
        {(type === 'edit' || type === 'create') && (
          <div>
            <h2>{type === 'edit' ? 'Edit Task' : 'Create Task'}</h2>
            <form>
              <label>
                Title:
                <input
                  type="text"
                  name="title"
                  value={task.title}
                  onChange={handleChange}
                  placeholder="Enter task title"
                />
              </label>
              <label>
                Description:
                <textarea
                  name="description"
                  value={task.description}
                  onChange={handleChange}
                  placeholder="Enter task description"
                ></textarea>
              </label>
              <label>
                Due Date:
                <input
                  type="date"
                  name="dueDate"
                  value={task.dueDate}
                  onChange={handleChange}
                />
              </label>
              <label>
                Status:
                <select name="status" value={task.status} onChange={handleChange}>
                  <option value="pending">Pending</option>
                  <option value="completed">Completed</option>
                </select>
              </label>
              <button type="button" onClick={handleSubmit}>
                {type === 'edit' ? 'Save Changes' : 'Create Task'}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default TaskModal;
