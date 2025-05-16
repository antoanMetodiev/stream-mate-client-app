import { Movie } from "../../../types/MovieType";
import { Series } from "../../../types/Series";
import { CinemaRecord } from "./CinemaRecord/CinemaRecord";
import style from "./CinemaRecordsList.module.css";

interface CinemaRecordsListProps {
    cinemaRecordsList: (Movie | Series)[] | undefined;
    currentPaginationPage: number;
    genres: string;
    allMoviesCount: number;
    searchedMovieTitle: string;
}

export const CinemaRecordsList = ({
    cinemaRecordsList,
    currentPaginationPage,
    genres,
    allMoviesCount,
    searchedMovieTitle,
}: CinemaRecordsListProps) => {


    return (
        <>
            <span className={style['bound']}></span>
            <section className={style["cinema-record-list-container"]}>
                {cinemaRecordsList && cinemaRecordsList?.length > 0 ? cinemaRecordsList?.map((cinemaRecord) => (
                    <CinemaRecord
                        key={cinemaRecord.id}
                        genres={genres}
                        searchedMovieTitle={searchedMovieTitle}
                        allMoviesCount={allMoviesCount}
                        cinemaRecord={cinemaRecord}
                        cinemaRecordsList={cinemaRecordsList}
                        currentPaginationPage={currentPaginationPage}
                    />
                )) : (
                    <h3 className={style['no-results-h3']}>No results!</h3>
                )}
            </section>
        </>
    );
};