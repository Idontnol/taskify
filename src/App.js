import './App.css';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import { useState } from 'react';
import { taskContext } from './context/taskContext';
import SignUpLoginModal from './components/Authenticate';
import AllTasks from './components/AllTasks';
import CompletedTasks from './components/CompletedTasks';
import PendingTasks from './components/PendingTasks';
import { projects, tasks } from './utils/data';
import Hero from './components/Hero';
import TaskBoard from './components2/TaskBoard';

function App() {
  const [showSignUpModal,setShowSignUpModal]=useState(false);
  const [currentTasks,setCurrentTasks]=useState(tasks);

  const NavbarTemplate1 = () => {
    const location = useLocation();
    const shouldShowNavbar = location.pathname.includes("template1");
    return shouldShowNavbar ? (
      <Navbar setShowSignUpModal={setShowSignUpModal} />
    ) : null;
  };

  const [activeProject,setActiveProject]=useState(null);
  const [allProjects,setAllProjects]=useState(projects);

  return (
    <div className="App">
        <BrowserRouter>
          <taskContext.Provider value={{currentTasks,setCurrentTasks,activeProject,setActiveProject,allProjects,setAllProjects}}>
            <NavbarTemplate1 />
            {showSignUpModal && <SignUpLoginModal setShowSignUpModal={setShowSignUpModal} />}
            <TaskBoard/>
            <Routes>
              <Route exact path="/home-template1" element={  <Hero/>} />
              <Route exact path="/all-tasks-template1" element={<AllTasks/>} />
              <Route exact path="/completed-tasks-template1" element={<CompletedTasks/>} />
              <Route exact path="/pending-tasks-template1" element={<PendingTasks/>} />

          </Routes>
          </taskContext.Provider >
        </BrowserRouter >
    </div>
  );
}

export default App;
