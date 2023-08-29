import styles from "./Projects.module.css";
import matias from "../../Images/matias.PNG";
import foods from "../../Images/foods.PNG";
import buddy from "../../Images/buddy.PNG";
import movies from "../../Images/movies.PNG";
const Projects = ()=>{
    return (
        <div>
            <a href="https://www.longoperrig.com.ar" target="_blank" rel="noopener noreferrer">
                <img src={matias} alt="matias" className={styles["images_projects"]}></img>
            </a>
            <a href="https://recipes.ignaciocoriadebernardi.com.ar/" target="_blank" rel="noopener noreferrer">
                <img src={foods} alt="foods" className={styles["images_projects"]}></img>
            </a>
            <a href="https://buddyong.vercel.app/" target="_blank" rel="noopener noreferrer">
                <img src={buddy} alt="buddy" className={styles["images_projects"]}></img>
            </a>
            <a href="https://www.youtube.com/watch?v=QGD1R469t70" target="_blank" rel="noopener noreferrer">
                <img src={movies} alt="movies" className={styles["images_projects"]}></img>
            </a>

        </div>
    )
}

export default Projects;