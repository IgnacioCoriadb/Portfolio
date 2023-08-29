import styles from "../Technologies/Technologies.module.css";
import html from "../../Images/html.png";
import css from "../../Images/css.png";
import node from "../../Images/node.png";
import react from "../../Images/react.png";
import laravel from "../../Images/laravel.png";
import php from "../../Images/php.png";
import redux from "../../Images/redux.png";
import pgsql from "../../Images/pgsql.png";
import mysql from "../../Images/mysql.png";
import git from "../../Images/git.png";
import github from "../../Images/github.png";


const Technologies = ()=>{
    return (
        <div>
            <img src={html} alt="html" className={styles["images-technologies"]}></img>
            <img src={css} alt="css" className={styles["images-technologies"]}></img>
            <img src={react} alt="redux" className={styles["images-technologies"]}></img>
            <img src={node} alt="node" className={styles["images-technologies"]}></img>
            <img src={redux} alt="redux" className={styles["images-technologies"]}></img>
            <img src={laravel} alt="laravel" className={styles["images-technologies"]}></img>
            <img src={php} alt="php" className={styles["images-technologies"]}></img>
            <img src={pgsql} alt="pgsql" className={styles["images-technologies"]}></img>
            <img src={mysql} alt="mysql" className={styles["images-technologies"]}></img>
            <img src={git} alt="git" className={styles["images-technologies"]}></img>
            <img src={github} alt="github" className={styles["images-technologies"]}></img>
        </div>
    )
}


export default Technologies;