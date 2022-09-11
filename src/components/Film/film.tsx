import './film.css';
import { film } from '../../types/film';
import { Link } from 'react-router-dom';

type Props = {
    data: film
}

export const Film = ({data}:Props) => {
    const url = data.url;
    const filmId = url[url.length - 2];

    return (
        <Link to={`/movies/${filmId}`} className="film">
            <img src={`https://starwars-visualguide.com/assets/img/films/${filmId}.jpg`} alt={data.title} />
            <div className='film_desc'>
                <div className='film_bar'>
                    <div className='bar_item_1'></div>
                    <div className='bar_item_2'></div>
                </div>
                <div className='film_title'>{data.title}</div>
            </div>
        </Link>
    )
}