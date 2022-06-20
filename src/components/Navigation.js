import { useState } from 'react'

import NavIcon from "./../images/nav_icon.svg"
import { Modal, Button } from 'react-bootstrap'
import { NavLink } from 'react-router-dom';

//import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/modal.css"

export default function Navigation(){
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const navItems = [
        { key: "home", path: "/", text: <>Home</> },
        { key: "aboutMe", path: "/about_me", text: <>About Me</> },
        { key: "projects", path: "/projects", text: <>Projects</> },
        { key: "portfolio", path: "/portfolio", text: <>Portfolio</> },
        { key: "contactMe", path: "/contact_me", text: <>Contact Me</> }
    ];

    if( show ){
        window.addEventListener("keydown", (e)=>{
                e.preventDefault();
                //console.log(e.key);
                if( e.key == 'Escape' ){
                    setShow(false)
                }

            });
    }
    

    return (
        <>
            <div id="nav-button" onClick={handleShow}>
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title>Navigation panel</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {
                        navItems.map( navItem => 
                            <p key={ navItem.key }>
                                <NavLink onClick={handleClose} to={ navItem.path } className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
                                    { navItem.text }
                                </NavLink>
                            </p>
                        )
                    }
                
                </Modal.Body>
                <Modal.Footer>
                    <Button className='btn-normal' onClick={handleClose}>
                        CLOSE THE PANEL
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}