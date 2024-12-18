import { useNavigate } from 'react-router-dom';
import './index.css';
import {useState} from 'react';
// import { MdMenu } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";
 
 const Navbar=(props)=>{
    const {setShowSignUpModal}=props;
    const navigate=useNavigate();

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
    const [currentTab,setCurrentTab]=useState("");
    
    return(
        <>
        <header className="navbar">
            <div className="navbar-logo" onClick={()=>{navigate("/")}}>
                <img className='taskify-logo' alt="taskify-logo" src="taskify-logo2.png" />
            </div>
            <div className='navbar-right'>

                <ul className='tabs'>
                    <li><div 
                    className={currentTab==='1'? 'tab-active' : ''} onClick={()=>{setCurrentTab('1');navigate('/all-tasks')}}>All Tasks</div></li>
                    <li><div href="/completed"
                    className={currentTab==='2'? 'tab-active' : ''} onClick={()=>{setCurrentTab('2');navigate('/completed-tasks')}}>Completed Tasks</div></li>
                    <li><div href="/pending"
                    className={currentTab==='3'? 'tab-active' : ''} onClick={()=>{setCurrentTab('3');navigate('/pending-tasks')}}>Pending Tasks</div></li>
                    <li><div href="/notes"
                    className={currentTab==='3'? 'tab-active' : ''} onClick={()=>{setCurrentTab('4');navigate('/notes')}}>Notes</div></li>
                    
                </ul>

            <div className="navbar-cta">
                <button className="cta-button" onClick={()=>{setShowSignUpModal(t=>!t)}}>Sign Up / Log In</button>
            </div>
            </div>

            <div className='navbar-cta-mob-right'>
                <div className="navbar-cta-mobile">
                    <button className="cta-button" onClick={()=>{setShowSignUpModal(t=>!t)}}>Sign Up / Log In</button>
                </div>

                <div className="menu-toggle hamburger" onClick={toggleMenu}>
                {isOpen ? <IoCloseSharp />:<IoCloseSharp />}
                </div>
            </div>
            
        </header>
        {isOpen && (
                    <div className="mobile-menu">
                        <ul className='tabs-mobile'>
                            <li><div 
                            className={currentTab==='1'? '' : ''} onClick={()=>{setCurrentTab('1');navigate('/all-tasks');toggleMenu();}}>All Tasks</div></li>
                            <li><div 
                            className={currentTab==='2'? '' : ''} onClick={()=>{setCurrentTab('2');navigate('/completed-tasks');toggleMenu();}}>Completed Tasks</div></li>
                            <li><div 
                            className={currentTab==='3'? '' : ''} onClick={()=>{setCurrentTab('3');navigate('/pending-tasks');toggleMenu();}}>Pending Tasks</div></li>
                            <li><div href="/notes"
                            className={currentTab==='3'? 'tab-active' : ''} onClick={()=>{setCurrentTab('4');navigate('/notes')}}>Notes</div></li>
                    
                        </ul>
                    </div>
                )}
        </>
    )
}

export default Navbar;