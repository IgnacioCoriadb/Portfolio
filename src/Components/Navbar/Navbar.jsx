/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect} from 'react';
import { Link } from "react-scroll";
import style from "./Navbar.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';
import argentina from "../../Images/argentina.png";
import english from "../../Images/english.png";

const NavBar = () => {
    const [t,il8n] = useTranslation("global");
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
                                    {t("navbar.home")}
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
                                {t("navbar.aboutMe")}
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
                                {t("navbar.technologies")}
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
                                {t("navbar.projects")}
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
                                {t("navbar.contact")}
                                </Link>
                            </li>
                            <li className="nav-item active">
                                <div className="dropdown">
                                    <div className="dropdown" aria-labelledby="dropdownMenuButton">
                                        <img src={argentina} alt="argentina" onClick={() => il8n.changeLanguage("es")} className={style.flag}></img>
                                        <img src={english} alt="english" onClick={() => il8n.changeLanguage("en")} className={style.flag}></img>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        
    </div>
    )
};

export default NavBar;
