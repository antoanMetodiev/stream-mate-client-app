import style from "./Navigation.module.css";

import { Link, useLocation, useNavigate } from "react-router-dom";
import { Movie } from "../../../../types/MovieType";
import { Series } from "../../../../types/Series";

interface NavigationProps {
    setCinemaRecordsList: React.Dispatch<React.SetStateAction<Movie[] | Series[] | undefined>>;
    setGenres: React.Dispatch<React.SetStateAction<string>>;
    setInputValue: React.Dispatch<React.SetStateAction<string>>;
    setSearchedMovieTitle: React.Dispatch<React.SetStateAction<string>>;
    setAllMoviesCount: React.Dispatch<React.SetStateAction<number>>;
    setCurrentPaginationPage: React.Dispatch<React.SetStateAction<number>>;
};

export const Navigation = ({
    setCinemaRecordsList,
    setGenres,
    setInputValue,
    setAllMoviesCount,
    setSearchedMovieTitle,
    setCurrentPaginationPage
}: NavigationProps) => {
    const location = useLocation();
    const navigate = useNavigate();

    const specialNavigateToCinemaRecord = (locationPath: string) => {
        if (location.pathname.includes(locationPath)) return; // Ако вече сме на този път, не правим нищо

        localStorage.removeItem("LAST_CINEMA_RECORDS");
        localStorage.removeItem("LAST_CURRENT_PAGE");
        localStorage.removeItem("LAST_GENRES");
        localStorage.removeItem("ALL_LAST_MOVIES_COUNT");
        localStorage.removeItem("LAST_SEARCHED_TITLE");

        if (setCinemaRecordsList) setCinemaRecordsList(undefined);
        setGenres("");
        setInputValue("");
        setSearchedMovieTitle("");
        setCurrentPaginationPage(1);
        setAllMoviesCount(0);
        navigate(locationPath);
    };

    return (
        <nav className={style['navigation-container']}>
            <h4
                onClick={() => specialNavigateToCinemaRecord("/movies")}
                className={`${style['link']} ${location.pathname.includes("/movies") ? style['active'] : ''}`}
            >
                Movies
            </h4>

            <h4
                onClick={() => specialNavigateToCinemaRecord("/series")}
                className={`${style['link']} ${location.pathname.includes("/series") ? style['active'] : ''}`}
            >
                Series
            </h4>

            <h4
                onClick={() => navigate("/order-cinema-record")}
                className={`${style['link']} ${location.pathname.includes("/order-cinema-record") ? style['active'] : ''}`}
            >
                Order
            </h4>

            <Link to="/tv-channels" className={`${style['link']} ${location.pathname.includes("/tv-channels") ? style['active'] : ''}`}>
                24/7 Channels
            </Link>
        </nav>
    );
}