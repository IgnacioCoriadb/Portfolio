import styles from "./Header.module.css";
import NavBar from '../Navbar/Navbar';

const Header = () => {
    return (
      <div className={styles["header-wraper"]}>
        <NavBar></NavBar>

        <div className={styles["main-info"]}>
          <h1 className={styles["h1-style"]}>Ignacio Coria de Bernardi</h1>
          <p className={styles["header-p"]}>Técnico en Desarrollo de Aplicaciones Web y Programador Full Stack</p>
        </div>
      </div>
    );
  };
  
export default Header;