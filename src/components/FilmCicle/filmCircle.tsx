import { Link } from 'react-router-dom';
import { film } from '../../types/film';
import './filmCircle.css';

type Props = {
    data: film,
}

export const FilmCircle = () => {
    return (
        <Link to={`/movies/`} className="filmCircle">
            <img src={`https://starwars-visualguide.com/assets/img/films/${1}.jpg`} />
        </Link>
    )
}