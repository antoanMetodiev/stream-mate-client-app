import style from "./HomePage.module.css";

import { WelcomeComponent } from "../HomePage/WelcomeComponent/WelcomeComponent";
import { User } from "../../types/User";
import { MovingCinemaRecords } from "./MovingCinemaRecords/MovingCinemaRecors";
import { Footer } from "../Footer/Footer";



export const HomePage = () => {

    return (
        <article className={style['home-page-container']}>
            <WelcomeComponent />
            <MovingCinemaRecords />
            <Footer />
        </article>
    );
}