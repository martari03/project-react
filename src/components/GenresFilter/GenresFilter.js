import {useSelector} from "react-redux";

import {GenreFilter} from "../GenreFilter/GenreFilter";

import css from './GenresFilter.module.css';

const GenresFilter = () => {
    const {genres} = useSelector(state => state.genres);
    const getGenres = genres.genres;

    return (
        <ul className={css.filter}>
            {
                getGenres && getGenres.map(genre => <GenreFilter key={genre.id} genre={genre}/>)
            }
        </ul>
    );
};

export {GenresFilter};