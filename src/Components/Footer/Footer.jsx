import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link } from "react-scroll";
import style from "./Footer.module.css";

const Footer = ()=>{

    return (
        <div className='container'>
            <footer className={ `${style["footer"]}`}>
                <div className={style['social']}>
                    <a href="https://www.linkedin.com/in/ignacio-coria-de-bernardi/"  target="_blank" rel="noopener noreferrer"><i className={`bi bi-github ${style['footer-icon']}` }></i></a>
                    <a href="https://github.com/IgnacioCoriadb" target="_blank" rel="noopener noreferrer"><i className={`bi bi-linkedin ${style['footer-icon']}` }></i></a>
                    <a href="mailto:ignaciocoriadb@gmail.com" target="_blank" rel="noopener noreferrer"><i className={`bi bi-envelope ${style['footer-icon']}`}></i></a>
                </div>
            </footer>
        </div>
    )
}

export default Footer;