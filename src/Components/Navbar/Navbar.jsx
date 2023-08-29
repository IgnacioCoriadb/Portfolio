import React, { useEffect} from 'react';
import { Link } from "react-scroll";
import style from "./Navbar.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {

    return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
                <div className="container">
                    <Link 
                        to="home" 
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        className={style.tittle}
                    >
                    Ignacio Coria de Bernardi
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                    <FontAwesomeIcon icon={faBars} style={{ color: "#fff" }} />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item active">
                                <Link
                                    to="home" 
                                    spy={true}
                                    smooth={true}
                                    offset={-30}
                                    duration={500}
                                    className={style.link}
                                >
                                    Inicio
                                </Link>
                            </li>
                            <li className="nav-item active">
                                <Link
                                    to="about" 
                                    spy={true}
                                    smooth={true}
                                    offset={-30}
                                    duration={500}
                                    className={style.link}
                                >
                                    Sobre mi
                                </Link>
                            </li>
                            <li className="nav-item active">
                                <Link
                                    to="technologies" 
                                    spy={true}
                                    smooth={true}
                                    offset={-30}
                                    duration={500}
                                    className={style.link}
                                >
                                    Tecnologías
                                </Link>
                            </li>
                            <li className="nav-item active">
                                <Link
                                    to="projects" 
                                    spy={true}
                                    smooth={true}
                                    offset={-30}
                                    duration={500}
                                    className={style.link}
                                >
                                    Proyectos
                                </Link>
                            </li>
                            <li className="nav-item active">
                                <Link
                                    to="contact" 
                                    spy={true}
                                    smooth={true}
                                    offset={-30}
                                    duration={500}
                                    className={style.link}
                                >
                                    Contacto
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        
    </div>
    )
};

export default NavBar;
