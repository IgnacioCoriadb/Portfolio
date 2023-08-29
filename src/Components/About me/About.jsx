import React from "react";
import styles from "./About.module.css";
import { useTranslation } from 'react-i18next';

const AboutMe = () => {
  const [t] = useTranslation("global");

  return (
    <div>
      <div className={`container mt-5 ${styles['aboutContainer']} ${styles.container}`}>
        <div className="row">
          <div className={`col-md-12`}>
            <p className={styles['aboutText']}>
              {t("about-me.text")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
