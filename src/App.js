import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import { useState } from 'react';
import { taskContext } from './context/taskContext';
import SignUpLoginModal from './components/Authenticate';
import AllTasks from './components/AllTasks';
import CompletedTasks from './components/CompletedTasks';
import PendingTasks from './components/PendingTasks';
import { tasks } from './utils/data';

function App() {
  const [showSignUpModal,setShowSignUpModal]=useState(false);
  const [currentTasks,setCurrentTasks]=useState(tasks);

  return (
    <div className="App">
        <BrowserRouter>
          <taskContext.Provider value={{currentTasks,setCurrentTasks}}>
            <Navbar setShowSignUpModal={setShowSignUpModal}  />
            {showSignUpModal && <SignUpLoginModal setShowSignUpModal={setShowSignUpModal} />}
            <Routes>
              <Route exact path="/" element={  <AllTasks/>} />
              <Route exact path="/all-tasks" element={<AllTasks/>} />
              <Route exact path="/completed-tasks" element={<CompletedTasks/>} />
              <Route exact path="pending-tasks" element={<PendingTasks/>} />

          </Routes>
          </taskContext.Provider >
        </BrowserRouter >
    </div>
  );
}

export default App;
