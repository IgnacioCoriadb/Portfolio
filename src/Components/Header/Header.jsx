import styles from "./Header.module.css";

const Header = () => {
    return (
      <div className={styles["header-wraper"]}>
        <div className={styles["main-info"]}>
          <h1 className={styles["h1-style"]}>Ignacio Coria de Bernardi</h1>
          <p className={styles["header-p"]}>Técnico en Desarrollo de Aplicaciones Web y Programador Full Stack</p>
        </div>
      </div>
    );
  };
  
export default Header;