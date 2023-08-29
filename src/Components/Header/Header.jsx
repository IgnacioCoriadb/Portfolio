import styles from "./Header.module.css";
import NavBar from '../Navbar/Navbar';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const [t] = useTranslation("global");

    return (
      <div className={styles["header-wraper"]}>
        <NavBar></NavBar>

        <div className={styles["main-info"]}>
          <h1 className={styles["h1-style"]}>Ignacio Coria de Bernardi</h1>
          <p className={styles["header-p"]}>{t("header.text-p")}</p>
        </div>
      </div>
    );
  };
  
export default Header;